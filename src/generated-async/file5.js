import { content } from "../generated-data/content5.js"
export const data = import(/* webpackPreload: true */ "./file6.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
