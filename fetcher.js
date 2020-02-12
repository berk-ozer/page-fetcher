const request = require('request');
const fs = require('fs');

const requestedURL = process.argv[2];

request(requestedURL, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Downloaded and saved XXX bytes to XXX');
  }
});

const data = 'dsgsdgsdgsdg';

fs.writeFile('./message.txt', data, (err) => {
  if (err) throw err;
  console.log('File has been saved!');
})

