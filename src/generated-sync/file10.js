import { content } from "../generated-data/content10.js"
import * as nextFile from "./file11.js"
export const data = content.toString().replace(/a/g, "b")+ nextFile.data
