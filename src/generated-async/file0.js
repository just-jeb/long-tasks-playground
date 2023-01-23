import { content } from "../generated-data/content0.js"
export const data = import(/* webpackPreload: true */ "./file1.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
