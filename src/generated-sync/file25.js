import { content } from "../generated-data/content25.js"
import * as nextFile from "./file26.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
