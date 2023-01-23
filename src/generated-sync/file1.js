import { content } from "../generated-data/content1.js"
import * as nextFile from "./file2.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
