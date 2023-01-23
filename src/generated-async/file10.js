import { content } from "../generated-data/content10.js"
export const data = import(/* webpackPreload: true */ "./file11.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
