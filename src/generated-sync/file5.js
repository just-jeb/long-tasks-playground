import { content } from "../generated-data/content5.js"
import * as nextFile from "./file6.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
