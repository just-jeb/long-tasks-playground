import { content } from "../generated-data/content5.js"
export const data = import(/* webpackPreload: true */ "./file6.js").then(nextFile => Object.values(content)[0] + nextFile.data)
