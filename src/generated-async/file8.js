import { content } from "../generated-data/content8.js"
export const data = import(/* webpackPreload: true */ "./file9.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
