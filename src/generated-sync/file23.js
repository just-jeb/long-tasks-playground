import { content } from "../generated-data/content23.js"
import * as nextFile from "./file24.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
