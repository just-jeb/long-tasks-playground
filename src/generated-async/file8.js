import { content } from "../generated-data/content8.js"
export const data = import(/* webpackPreload: true */ "./file9.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
