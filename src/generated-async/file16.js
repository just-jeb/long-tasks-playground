import { content } from "../generated-data/content16.js"
export const data = import(/* webpackPreload: true */ "./file17.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
