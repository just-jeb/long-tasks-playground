export const generateSyncScriptYield = ({functionize} = {functionize: false}) => (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${functionize ? '-fn' : ''}${fileIndex}.js"`;
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let nextFilePromise = skipImport ? 'Promise.resolve("")' : 'nextFile.data';
    let concatData = 
    `async function concatData(nextFileData) {
        await new Promise(resolve => setTimeout(resolve, 0));
        return Object.values(content${functionize ? '()' : ''})[0] + nextFileData;
    }`;
    let data = 
    `export const data = ${nextFilePromise}
        .then(concatData);`
    return `${importData}\n${importLine}\n${concatData}\n${data}`;
}