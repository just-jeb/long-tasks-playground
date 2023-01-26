import { content } from "../generated-data/content10.js"
export const data = import(/* webpackPreload: true */ "./file11.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
