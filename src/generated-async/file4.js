import { content } from "../generated-data/content4.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file5.js")
                         .then(concatData);
