export const generateAsyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? 'Promise.resolve({data: Promise.resolve("")})' : `import(/* webpackPreload: true */ "./file${fileIndex + 1}.js")`;
    let concatData = 
    `async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }`;
    let data = 
    `export const data = ${importLine}
                         .then(concatData);`
    return `${importData}\n${concatData}\n${data}`;
}