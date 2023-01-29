import { content } from "../generated-data/content22.js"
import * as nextFile from "./file23.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
