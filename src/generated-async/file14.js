import { content } from "../generated-data/content14.js"
export const data = import(/* webpackPreload: true */ "./file15.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
