import { content } from "../generated-data/content8.js"
import * as nextFile from "./file9.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
