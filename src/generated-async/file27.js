import { content } from "../generated-data/content27.js"
export const data = import(/* webpackPreload: true */ "./file28.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
