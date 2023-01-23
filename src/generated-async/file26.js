import { content } from "../generated-data/content26.js"
export const data = import(/* webpackPreload: true */ "./file27.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
