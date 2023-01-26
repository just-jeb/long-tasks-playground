import { content } from "../generated-data/content26.js"
export const data = import(/* webpackPreload: true */ "./file27.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
