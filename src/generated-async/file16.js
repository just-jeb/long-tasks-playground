import { content } from "../generated-data/content16.js"
export const data = import(/* webpackPreload: true */ "./file17.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
