const fs = require("fs");
const crypto = require("crypto");

// Adjust the number of files to be generated
const numberOfFiles = 30;

// Generate arbitrary content of approximately 20 KB
const content = crypto.randomBytes(50000).toString("hex");

const generateRandomJsFile = (fileIndex, skipImport = false) => {
    let importLine = skipImport ? 'Promise.resolve({data: ""})' : `import(/* webpackPreload: true */ "./file${fileIndex + 1}.js")`;
    let data = `export const data = ${importLine}.then(nextFile => "${content}".replace(/a/g, "b") + nextFile.data)`;
    fs.writeFileSync(`src/generated-async/file${fileIndex}.js`, `${data}\n`);
}

for (let i = 0; i < numberOfFiles; i++) {
    generateRandomJsFile(i, i == numberOfFiles - 1);
}

