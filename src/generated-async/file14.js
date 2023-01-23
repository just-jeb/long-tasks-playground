import { content } from "../generated-data/content14.js"
export const data = import(/* webpackPreload: true */ "./file15.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
