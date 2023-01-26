import { content } from "../generated-data/content25.js"
export const data = import(/* webpackPreload: true */ "./file26.js").then(nextFile => Object.values(content)[0] + nextFile.data)
