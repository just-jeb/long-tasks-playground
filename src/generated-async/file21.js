import { content } from "../generated-data/content21.js"
export const data = import(/* webpackPreload: true */ "./file22.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
