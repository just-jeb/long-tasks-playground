import { content } from "../generated-data/content23.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file24.js")
                         .then(concatData);
