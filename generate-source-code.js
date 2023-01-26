const fs = require("fs");
const crypto = require("crypto");

// Adjust the number of files to be generated
const numberOfFiles = 30;
const fileSize = 50 * 1024 /* 50kb */;

const wrapInFunction = (data) => `export function content () { return ${data}; }`;
const wrapInConst = (data) => `export const content = ${data}`;

const generateRandomJsDataFile = ({fileName, jsonSize = fileSize, keySize=8, valueSize=16, functionize = false}) => {
    const entriesCount = jsonSize/(keySize + valueSize);
    const json = {};
    for (let i = 0; i < entriesCount; i++) {
        const key = crypto.randomBytes(keySize).toString('hex');
        const value = crypto.randomBytes(valueSize).toString('hex');
        json[key] = value;
    }

    const data = JSON.stringify(json, null, 2);
    let content = functionize ? wrapInFunction(data) : wrapInConst(data);
    fs.writeFileSync(fileName, content);
}

const generateSyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let data = `export const data = Object.values(content)[0]`;
    if (!skipImport) {
        data += '+ nextFile.data';
    }
    return `${importData}\n${importLine}\n${data}`;
}

const generateSyncScriptYield = ({functionize} = {functionize: false}) => (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${functionize ? '-fn' : ''}${fileIndex}.js"`;
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let nextFilePromise = skipImport ? 'Promise.resolve("")' : 'nextFile.data';
    let data = `export const data = ${nextFilePromise}
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content${functionize ? '()' : ''})[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );`
    return `${importData}\n${importLine}\n${data}`;
}

const generateAsyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? 'Promise.resolve({data: ""})' : `import(/* webpackPreload: true */ "./file${fileIndex + 1}.js")`;
    let data = `export const data = ${importLine}.then(nextFile => Object.values(content)[0] + nextFile.data)`;
    return `${importData}\n${data}`;
}

const generators = [{
    func: generateSyncScript,
    folder: 'generated-sync',
},
{
    func: generateAsyncScript,
    folder: 'generated-async',
},
{
    func: generateSyncScriptYield(),
    folder: 'generated-sync-yield',
},
{
    func: generateSyncScriptYield({functionize: true}),
    folder: 'generated-sync-yield-func',
}];

const generateScripts = (fileIndex, skipImport = false) => {
    for(let generator of generators) {
        const scriptContent = generator.func(fileIndex, skipImport);
        fs.writeFileSync(`src/${generator.folder}/file${fileIndex}.js`, `${scriptContent}\n`);
    }
}

for (let i = 0; i < numberOfFiles; i++) {
    generateRandomJsDataFile({fileName: `src/generated-data/content${i}.js`});
    generateRandomJsDataFile({fileName: `src/generated-data/content-fn${i}.js`, functionize: true});
    generateScripts(i, i == numberOfFiles - 1);
}

