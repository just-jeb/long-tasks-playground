import { content } from "../generated-data/content8.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file9.js")
                         .then(concatData);
