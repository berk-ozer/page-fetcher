const request = require('request');
const fs = require('fs');

const requestedURL = process.argv[2];
const toThisPath = process.argv[3];

const makeRequest = (saveData) => {
  request(requestedURL, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      saveData(body);
    }
  });
};

const writeToFile = (data) => {
  fs.writeFile(toThisPath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Downloaded and saved XXX bytes to ${toThisPath}`);
    }
  })
};

makeRequest(writeToFile);