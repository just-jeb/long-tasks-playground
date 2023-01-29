import { content } from "../generated-data/content13.js"
import * as nextFile from "./file14.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
