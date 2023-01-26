import { content } from "../generated-data/content26.js"
export const data = import(/* webpackPreload: true */ "./file27.js").then(nextFile => Object.values(content)[0] + nextFile.data)
