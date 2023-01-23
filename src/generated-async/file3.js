import { content } from "../generated-data/content3.js"
export const data = import(/* webpackPreload: true */ "./file4.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
