import { content } from "../generated-data/content18.js"
import * as nextFile from "./file19.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
