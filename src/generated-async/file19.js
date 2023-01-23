import { content } from "../generated-data/content19.js"
export const data = import(/* webpackPreload: true */ "./file20.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
