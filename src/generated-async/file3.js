import { content } from "../generated-data/content3.js"
export const data = import(/* webpackPreload: true */ "./file4.js").then(nextFile => Object.values(content)[0] + nextFile.data)
