import { content } from "../generated-data/content4.js"
import * as nextFile from "./file5.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
