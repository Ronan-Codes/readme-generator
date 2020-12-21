const fs = require('fs');

// writeFile function to create README.md file with generateMarkdown data

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: 'README.md created at ./dist folder!'
            });
        });
    });
};

module.exports = writeFile;
