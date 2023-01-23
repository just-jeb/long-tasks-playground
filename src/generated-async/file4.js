import { content } from "../generated-data/content4.js"
export const data = import(/* webpackPreload: true */ "./file5.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
