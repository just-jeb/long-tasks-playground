import { content } from "../generated-data/content28.js"
import * as nextFile from "./file29.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
