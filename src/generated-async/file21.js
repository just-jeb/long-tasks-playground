import { content } from "../generated-data/content21.js"
export const data = import(/* webpackPreload: true */ "./file22.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
