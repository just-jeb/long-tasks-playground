import { content } from "../generated-data/content9.js"
export const data = import(/* webpackPreload: true */ "./file10.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
