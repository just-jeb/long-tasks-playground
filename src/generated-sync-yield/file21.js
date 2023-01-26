import { content } from "../generated-data/content21.js"
import * as nextFile from "./file22.js"
export const data = nextFile.data
                    .then(nextFileData => {
                        setTimeout(() => { 
                            const res = Object.values(content)[0] + nextFileData;
                            resolve(res);
                        }, 0);
                    });
