import { content } from "../generated-data/content6.js"
import * as nextFile from "./file7.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
