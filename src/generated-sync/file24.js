import { content } from "../generated-data/content24.js"
import * as nextFile from "./file25.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
