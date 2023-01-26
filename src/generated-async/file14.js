import { content } from "../generated-data/content14.js"
export const data = import(/* webpackPreload: true */ "./file15.js").then(nextFile => Object.values(content)[0] + nextFile.data)
