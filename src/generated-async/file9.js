import { content } from "../generated-data/content9.js"
export const data = import(/* webpackPreload: true */ "./file10.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
