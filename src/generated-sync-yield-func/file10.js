import { content } from "../generated-data/content-fn10.js"
import * as nextFile from "./file11.js"
async function concatData(nextFileData) {
        await new Promise(resolve => setTimeout(resolve, 0));
        return Object.values(content())[0] + nextFileData;
    }
export const data = nextFile.data
        .then(concatData);
