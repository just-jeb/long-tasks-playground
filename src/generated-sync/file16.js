import { content } from "../generated-data/content16.js"
import * as nextFile from "./file17.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
