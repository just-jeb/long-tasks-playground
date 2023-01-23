import { content } from "../generated-data/content2.js"
import * as nextFile from "./file3.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
