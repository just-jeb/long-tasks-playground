import { content } from "../generated-data/content9.js"
export const data = import(/* webpackPreload: true */ "./file10.js").then(nextFile => Object.values(content)[0] + nextFile.data)
