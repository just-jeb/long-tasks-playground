import { content } from "../generated-data/content3.js"
import * as nextFile from "./file4.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
