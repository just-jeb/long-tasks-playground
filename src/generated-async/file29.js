import { content } from "../generated-data/content29.js"
export const data = Promise.resolve({data: ""}).then(nextFile => content.toString().replace(/a/g, "b") + nextFile.data)
