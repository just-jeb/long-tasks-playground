import { content } from "../generated-data/content21.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file22.js")
                         .then(concatData);
