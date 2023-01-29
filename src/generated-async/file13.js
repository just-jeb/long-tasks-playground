import { content } from "../generated-data/content13.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file14.js")
                         .then(concatData);
