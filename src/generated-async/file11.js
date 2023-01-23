import { content } from "../generated-data/content11.js"
export const data = import(/* webpackPreload: true */ "./file12.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
