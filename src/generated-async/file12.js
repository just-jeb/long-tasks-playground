import { content } from "../generated-data/content12.js"
export const data = import(/* webpackPreload: true */ "./file13.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
