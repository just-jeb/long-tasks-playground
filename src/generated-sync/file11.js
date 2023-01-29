import { content } from "../generated-data/content11.js"
import * as nextFile from "./file12.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
