import { content } from "../generated-data/content7.js"
export const data = import(/* webpackPreload: true */ "./file8.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
