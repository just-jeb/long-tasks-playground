import { content } from "../generated-data/content1.js"
export const data = import(/* webpackPreload: true */ "./file2.js")
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
