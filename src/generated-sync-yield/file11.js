import { content } from "../generated-data/content11.js"
import * as nextFile from "./file12.js"
export const data = nextFile.data
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content)[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );
