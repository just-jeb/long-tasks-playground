import fs from 'fs';
import { generateAsyncScript, generateSyncScript, generateSyncScriptYield, generateRandomJsDataFile } from './generators/index.mjs';
import { numberOfFiles } from './consts.mjs';

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

