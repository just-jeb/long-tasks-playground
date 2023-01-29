import { content } from "../generated-data/content14.js"
import * as nextFile from "./file15.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
