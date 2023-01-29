import { content } from "../generated-data/content20.js"
import * as nextFile from "./file21.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
