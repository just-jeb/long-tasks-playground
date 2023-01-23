import { content } from "../generated-data/content24.js"
export const data = import(/* webpackPreload: true */ "./file25.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
