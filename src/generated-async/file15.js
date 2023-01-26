import { content } from "../generated-data/content15.js"
export const data = import(/* webpackPreload: true */ "./file16.js").then(nextFile => Object.values(content)[0] + nextFile.data)
