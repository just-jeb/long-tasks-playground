import { content } from "../generated-data/content24.js"
export const data = import(/* webpackPreload: true */ "./file25.js").then(nextFile => Object.values(content)[0] + nextFile.data)
