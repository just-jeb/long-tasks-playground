import { content } from "../generated-data/content27.js"
export const data = import(/* webpackPreload: true */ "./file28.js").then(nextFile => Object.values(content)[0] + nextFile.data)
