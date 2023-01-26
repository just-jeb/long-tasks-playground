import { content } from "../generated-data/content0.js"
export const data = import(/* webpackPreload: true */ "./file1.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
