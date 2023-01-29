export const generateSyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let concatData = 
    `function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    `
    let data = `export const data = concatData(nextFile.data);`;
    if (skipImport) {
        data = 'export const data = Object.values(content)[0];';
    }
    return `${importData}\n${importLine}\n${concatData}\n${data}`;
}