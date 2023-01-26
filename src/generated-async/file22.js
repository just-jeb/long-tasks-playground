import { content } from "../generated-data/content22.js"
export const data = import(/* webpackPreload: true */ "./file23.js").then(nextFile => Object.values(content)[0] + nextFile.data)
