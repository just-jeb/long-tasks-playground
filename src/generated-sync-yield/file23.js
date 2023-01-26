import { content } from "../generated-data/content23.js"
import * as nextFile from "./file24.js"
export const data = nextFile.data
                    .then(nextFileData => 
                            new Promise(resolve => setTimeout(() => { 
                                const res = Object.values(content)[0] + nextFileData;
                                resolve(res);
                            }, 0))
                        );
