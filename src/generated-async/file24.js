import { content } from "../generated-data/content24.js"
export const data = import(/* webpackPreload: true */ "./file25.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
