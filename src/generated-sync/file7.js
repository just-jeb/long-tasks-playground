import { content } from "../generated-data/content7.js"
import * as nextFile from "./file8.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
