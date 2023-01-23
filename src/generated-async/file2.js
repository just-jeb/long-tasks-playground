import { content } from "../generated-data/content2.js"
export const data = import(/* webpackPreload: true */ "./file3.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
