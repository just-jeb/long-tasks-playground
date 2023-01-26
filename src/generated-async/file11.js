import { content } from "../generated-data/content11.js"
export const data = import(/* webpackPreload: true */ "./file12.js").then(nextFile => Object.values(content)[0] + nextFile.data)
