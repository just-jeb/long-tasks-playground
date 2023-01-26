import { content } from "../generated-data/content4.js"
export const data = import(/* webpackPreload: true */ "./file5.js").then(nextFile => Object.values(content)[0] + nextFile.data)
