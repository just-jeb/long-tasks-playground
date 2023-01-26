export const generateSyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let data = `export const data = Object.values(content)[0]`;
    if (!skipImport) {
        data += '+ nextFile.data';
    }
    return `${importData}\n${importLine}\n${data}`;
}