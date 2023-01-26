import { content } from "../generated-data/content4.js"
export const data = import(/* webpackPreload: true */ "./file5.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
