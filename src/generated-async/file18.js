import { content } from "../generated-data/content18.js"
export const data = import(/* webpackPreload: true */ "./file19.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
