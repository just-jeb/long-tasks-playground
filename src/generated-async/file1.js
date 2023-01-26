import { content } from "../generated-data/content1.js"
export const data = import(/* webpackPreload: true */ "./file2.js").then(nextFile => Object.values(content)[0] + nextFile.data)
