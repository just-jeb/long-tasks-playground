export const generateAsyncScript = (fileIndex, skipImport = false) => {
    const importData = `import { content } from "../generated-data/content${fileIndex}.js"`;
    let importLine = skipImport ? 'Promise.resolve({data: Promise.resolve("")})' : `import(/* webpackPreload: true */ "./file${fileIndex + 1}.js")`;
    let data = `export const data = ${importLine}
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)`;
    return `${importData}\n${data}`;
}