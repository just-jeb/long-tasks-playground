import { content } from "../generated-data/content1.js"
export const data = import(/* webpackPreload: true */ "./file2.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
