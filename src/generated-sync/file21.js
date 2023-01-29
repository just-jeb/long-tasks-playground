import { content } from "../generated-data/content21.js"
import * as nextFile from "./file22.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
