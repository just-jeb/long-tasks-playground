import { content } from "../generated-data/content13.js"
export const data = import(/* webpackPreload: true */ "./file14.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
