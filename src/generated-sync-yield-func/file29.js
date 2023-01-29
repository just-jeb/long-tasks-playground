import { content } from "../generated-data/content-fn29.js"

async function concatData(nextFileData) {
        await new Promise(resolve => setTimeout(resolve, 0));
        return Object.values(content())[0] + nextFileData;
    }
export const data = Promise.resolve("")
        .then(concatData);
