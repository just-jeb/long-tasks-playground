import { content } from "../generated-data/content17.js"
export const data = import(/* webpackPreload: true */ "./file18.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
