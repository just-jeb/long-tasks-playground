import { content } from "../generated-data/content16.js"
export const data = import(/* webpackPreload: true */ "./file17.js").then(nextFile => Object.values(content)[0] + nextFile.data)
