import { content } from "../generated-data/content0.js"
import * as nextFile from "./file1.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
