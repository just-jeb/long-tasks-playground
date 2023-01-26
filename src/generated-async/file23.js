import { content } from "../generated-data/content23.js"
export const data = import(/* webpackPreload: true */ "./file24.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
