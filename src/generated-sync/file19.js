import { content } from "../generated-data/content19.js"
import * as nextFile from "./file20.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
