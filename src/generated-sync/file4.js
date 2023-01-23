import { content } from "../generated-data/content4.js"
import * as nextFile from "./file5.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
