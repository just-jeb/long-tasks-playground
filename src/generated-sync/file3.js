import { content } from "../generated-data/content3.js"
import * as nextFile from "./file4.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
