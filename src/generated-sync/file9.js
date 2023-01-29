import { content } from "../generated-data/content9.js"
import * as nextFile from "./file10.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
