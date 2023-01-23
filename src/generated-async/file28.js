import { content } from "../generated-data/content28.js"
export const data = import(/* webpackPreload: true */ "./file29.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
