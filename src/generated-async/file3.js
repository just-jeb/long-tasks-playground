import { content } from "../generated-data/content3.js"
export const data = import(/* webpackPreload: true */ "./file4.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
