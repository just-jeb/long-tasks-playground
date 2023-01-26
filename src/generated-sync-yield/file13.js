import { content } from "../generated-data/content13.js"
import * as nextFile from "./file14.js"
export const data = nextFile.data
                    .then(nextFileData => {
                        setTimeout(() => { 
                            const res = Object.values(content)[0] + nextFileData;
                            resolve(res);
                        }, 0);
                    });
