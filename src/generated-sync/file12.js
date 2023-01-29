import { content } from "../generated-data/content12.js"
import * as nextFile from "./file13.js"
function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = concatData(nextFile.data);
