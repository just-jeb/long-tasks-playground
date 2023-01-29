import { content } from "../generated-data/content29.js"

function concatData(nextFileData) {
        return Object.values(content)[0] + nextFileData;
    }
    
export const data = Object.values(content)[0];
