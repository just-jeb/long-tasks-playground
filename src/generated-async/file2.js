import { content } from "../generated-data/content2.js"
export const data = import(/* webpackPreload: true */ "./file3.js").then(nextFile => Object.values(content)[0] + nextFile.data)
