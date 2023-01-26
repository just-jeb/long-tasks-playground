import { content } from "../generated-data/content7.js"
export const data = import(/* webpackPreload: true */ "./file8.js").then(nextFile => Object.values(content)[0] + nextFile.data)
