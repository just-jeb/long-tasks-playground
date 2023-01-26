import { content } from "../generated-data/content7.js"
export const data = import(/* webpackPreload: true */ "./file8.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
