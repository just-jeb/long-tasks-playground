import { content } from "../generated-data/content25.js"
export const data = import(/* webpackPreload: true */ "./file26.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
