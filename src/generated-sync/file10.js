import { content } from "../generated-data/content10.js"
import * as nextFile from "./file11.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
