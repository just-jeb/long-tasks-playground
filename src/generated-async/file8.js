import { content } from "../generated-data/content8.js"
export const data = import(/* webpackPreload: true */ "./file9.js").then(nextFile => Object.values(content)[0] + nextFile.data)
