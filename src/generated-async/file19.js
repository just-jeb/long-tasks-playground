import { content } from "../generated-data/content19.js"
export const data = import(/* webpackPreload: true */ "./file20.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
