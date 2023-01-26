import { content } from "../generated-data/content-fn29.js"

export const data = Promise.resolve("")
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content())[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );
