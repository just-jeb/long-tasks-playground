import { content } from "../generated-data/content-fn8.js"
import * as nextFile from "./file9.js"
export const data = nextFile.data
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content())[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );