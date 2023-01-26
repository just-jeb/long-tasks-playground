import { content } from "../generated-data/content20.js"
export const data = import(/* webpackPreload: true */ "./file21.js").then(nextFile => Object.values(content)[0] + nextFile.data)
