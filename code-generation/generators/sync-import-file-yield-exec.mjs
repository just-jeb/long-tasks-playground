export const generateSyncScriptYield = ({functionize} = {functionize: false}) => (fileIndex, skipImport = false) => {
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