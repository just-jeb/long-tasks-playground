import { content } from "../generated-data/content11.js"
export const data = import(/* webpackPreload: true */ "./file12.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
