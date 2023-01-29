import { content } from "../generated-data/content17.js"
import * as nextFile from "./file18.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
