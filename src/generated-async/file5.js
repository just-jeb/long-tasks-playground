import { content } from "../generated-data/content5.js"
export const data = import(/* webpackPreload: true */ "./file6.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
