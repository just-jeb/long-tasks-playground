import { content } from "../generated-data/content6.js"
export const data = import(/* webpackPreload: true */ "./file7.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
