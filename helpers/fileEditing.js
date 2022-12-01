const fs = require('fs');
const util = require('util');
// This makes a promise version of readFile
const readThisFile = util.promisify(fs.readFile);
// This writes the note as an "object" in the file destination you enter. Also sets up another function
const writeInFile = (fileDest, content) => 
    fs.writeFile(fileDest, JSON.stringify(content, null, 4), (error) =>
        error ? console.error(error) : console.info(`Saved new note in ${fileDest}!`)
);

const readAndWrite = (content, file) => {
    fs.readFile(file, 'utf8', (error, data) => {
        // If an error occurs it will log the error in the console.
        if (error) {
            console.error(error);
        // Otherwise it parses the data from the json file and 
        } else {
            const parse = JSON.parse(data);
            parse.push(content);
            writeInFile(file, parse);
        }
    });
}


module.exports = { readThisFile,  writeInFile, readAndWrite }