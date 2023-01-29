import { content } from "../generated-data/content15.js"
import * as nextFile from "./file16.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
