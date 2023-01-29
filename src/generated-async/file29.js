import { content } from "../generated-data/content29.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = Promise.resolve({data: Promise.resolve("")})
                         .then(concatData);
