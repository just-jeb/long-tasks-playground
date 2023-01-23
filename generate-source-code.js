const fs = require("fs");
const crypto = require("crypto");

// Adjust the number of files to be generated
const numberOfFiles = 30;

// Generate arbitrary content of approximately 20 KB
const content = crypto.randomBytes(50000).toString("hex");



const generateRandomJsonFile = (fileName, jsonSize = 50 * 1024 /* 50kb */, keySize=8, valueSize=16) => {
    const entriesCount = jsonSize/(keySize + valueSize);
    const json = {};
    for (let i = 0; i < entriesCount; i++) {
        const key = crypto.randomBytes(keySize).toString('hex');
        const value = crypto.randomBytes(valueSize).toString('hex');
        json[key] = value;
    }
    
    fs.writeFileSync(fileName, `export const content = ${JSON.stringify(json, null, 2)}`);
}

const generateSyncScript = (fileIndex, skipImport = false) => {
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let data = `export const data = content.toString().replace(/a/g, "b")`;
    if (!skipImport) {
        data += '+ nextFile.data';
    }
    return `${importLine}\n${data}`;
}

const generateSyncScriptYield = (fileIndex, skipImport = false) => {
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let nextFilePromise = skipImport ? 'Promise.resolve("")' : 'nextFile.data';
    let data = `export const data = ${nextFilePromise}
                    .then(nextFileData => {
                        setTimeout(() => { 
                        const res = content.toString().replace(/a/g, "b") + nextFileData;
                        resolve(res);
                        }, 0);
                    });`
    return `${importLine}\n${data}`;
}

const generateAsyncScript = (fileIndex, skipImport = false) => {
    let importLine = skipImport ? 'Promise.resolve({data: ""})' : `import(/* webpackPreload: true */ "./file${fileIndex + 1}.js")`;
    let data = `export const data = ${importLine}.then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)`;
    return data;
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
    func: generateSyncScriptYield,
    folder: 'generated-sync-yield',
}];

const generateScripts = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    for(let generator of generators) {
        const scriptContent = generator.func(fileIndex, skipImport);
        fs.writeFileSync(`src/${generator.folder}/file${fileIndex}.js`, `${importData}\n${scriptContent}\n`);
    }
}

for (let i = 0; i < numberOfFiles; i++) {
    generateRandomJsonFile(`src/generated-data/content${i}.js`);
    generateScripts(i, i == numberOfFiles - 1);
}

