import { content } from "../generated-data/content17.js"
export const data = import(/* webpackPreload: true */ "./file18.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
