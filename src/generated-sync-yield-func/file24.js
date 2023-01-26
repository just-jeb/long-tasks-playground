import { content } from "../generated-data/content-fn24.js"
import * as nextFile from "./file25.js"
export const data = nextFile.data
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content())[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );
