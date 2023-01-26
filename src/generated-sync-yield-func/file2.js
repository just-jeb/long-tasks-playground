import { content } from "../generated-data/content-fn2.js"
import * as nextFile from "./file3.js"
export const data = nextFile.data
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content())[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );
