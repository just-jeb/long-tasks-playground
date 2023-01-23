import { content } from "../generated-data/content20.js"
export const data = import(/* webpackPreload: true */ "./file21.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
