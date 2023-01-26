import { content } from "../generated-data/content20.js"
export const data = import(/* webpackPreload: true */ "./file21.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
