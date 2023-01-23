const fs = require("fs");
const crypto = require("crypto");

// Adjust the number of files to be generated
const numberOfFiles = 30;

// Generate arbitrary content of approximately 20 KB
const content = crypto.randomBytes(50000).toString("hex");

const generateRandomJsFile = (fileIndex, skipImport = false) => {
    let importLine = skipImport ? '' : `import * as nextFile from "./file${fileIndex + 1}.js"`;
    let data = `export const data = "${content}".replace(/a/g, "b")`;
    if (!skipImport) {
        data += '+ nextFile.data';
    }
    fs.writeFileSync(`src/generated/file${fileIndex}.js`, `${importLine}\n${data}\n`);
}

for (let i = 0; i < numberOfFiles; i++) {
    generateRandomJsFile(i, i == numberOfFiles - 1);
}

