import { content } from "../generated-data/content12.js"
export const data = import(/* webpackPreload: true */ "./file13.js").then(nextFile => Object.values(content)[0] + nextFile.data)
