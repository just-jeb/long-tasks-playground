import { content } from "../generated-data/content6.js"
export const data = import(/* webpackPreload: true */ "./file7.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
