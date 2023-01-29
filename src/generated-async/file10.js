import { content } from "../generated-data/content10.js"
async function concatData(prevFile) {
        const {data} = await prevFile;
        return Object.values(content)[0] + data;
    }
export const data = import(/* webpackPreload: true */ "./file11.js")
                         .then(concatData);
