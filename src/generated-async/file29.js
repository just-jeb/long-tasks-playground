import { content } from "../generated-data/content29.js"
export const data = Promise.resolve({data: Promise.resolve("")})
                    .then(({data}) => data)
                    .then(data => Object.values(content)[0] + data)
