import { content } from "../generated-data/content28.js"
export const data = import(/* webpackPreload: true */ "./file29.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
