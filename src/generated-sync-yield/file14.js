import { content } from "../generated-data/content14.js"
import * as nextFile from "./file15.js"
export const data = nextFile.data
                    .then(nextFileData => {
                        setTimeout(() => { 
                        const res = content.toString().replace(/a/g, "b") + nextFileData;
                        resolve(res);
                        }, 0);
                    });