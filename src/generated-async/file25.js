import { content } from "../generated-data/content25.js"
export const data = import(/* webpackPreload: true */ "./file26.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
