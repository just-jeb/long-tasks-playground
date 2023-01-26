import { content } from "../generated-data/content13.js"
export const data = import(/* webpackPreload: true */ "./file14.js").then(nextFile => Object.values(content)[0] + nextFile.data)
