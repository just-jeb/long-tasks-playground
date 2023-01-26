import { content } from "../generated-data/content19.js"
export const data = import(/* webpackPreload: true */ "./file20.js").then(nextFile => Object.values(content)[0] + nextFile.data)
