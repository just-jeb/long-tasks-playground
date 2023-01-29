import { content } from "../generated-data/content2.js"
import * as nextFile from "./file3.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
