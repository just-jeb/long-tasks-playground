import { content } from "../generated-data/content19.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file20.js")
                         .then(concatData);
