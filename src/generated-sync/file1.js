import { content } from "../generated-data/content1.js"
import * as nextFile from "./file2.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
