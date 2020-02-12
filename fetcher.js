const request = require('request');
const fs = require('fs');

const requestedURL = process.argv[2];

const makeRequest = (saveData) => {
  request(requestedURL, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else {
      saveData(body);
      console.log('Downloaded and saved XXX bytes to XXX');
    }
  });
};

const writeToFile = (data) => {
  fs.writeFile('./index.html', data, (err) => {
    if (err) throw err;
    console.log('File has been saved!');
  })
};

makeRequest(writeToFile);