const request = require('request');
const fs = require('fs');

const requestedURL = process.argv[2];

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
  fs.writeFile('./index.html', data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Downloaded and saved XXX bytes to XXX');
    }
  })
};

makeRequest(writeToFile);