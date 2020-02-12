const request = require('request');
const fs = require('fs');

request('http://www.google.com', (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Status Code:', response.statusCode);
    console.log('Body:', body);
  }
});