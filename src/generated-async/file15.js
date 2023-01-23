import { content } from "../generated-data/content15.js"
export const data = import(/* webpackPreload: true */ "./file16.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
