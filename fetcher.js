const request = require('request');
const fs = require('fs');

let requestedURL, toThisPath;

if (process.argv[2] && process.argv[3]) {
  requestedURL = process.argv[2];
  toThisPath = process.argv[3];
} else {
  console.log('You\'re missing a parameter!\nPlease make sure you provide a valid URL and file path.');
  return;
}

const makeRequest = (saveData) => {
  request(requestedURL, (error, response, body) => {
    if (error) {
      console.log('Something is wrong with the URL!\n' + error);
    } else if (response.statusCode !== 200) {
      console.log('Sorry, this page does not exist!');
    } else {
      saveData(body);
    }
  });
};

const writeToFile = (data) => {
  fs.writeFile(toThisPath, data, (error) => {
    if (error) {
      console.log('Something went wrong while writing to file!\n' + error);
    } else {
      console.log(`Downloaded and saved ${fs.statSync(toThisPath).size} bytes to ${toThisPath}`);
    }
  });
};

makeRequest(writeToFile);