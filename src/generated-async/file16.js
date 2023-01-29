import { content } from "../generated-data/content16.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file17.js")
                         .then(concatData);
