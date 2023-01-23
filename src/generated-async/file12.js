import { content } from "../generated-data/content12.js"
export const data = import(/* webpackPreload: true */ "./file13.js").then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
