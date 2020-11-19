const path = require('path');
const fs = require('fs');
require('http');
const querystring = require('querystring');
const search = require('../public/search.js');

const handleMain = (response) => {
  console.log('handleMain');
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1> error with server </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlePublic = (response, url) => {
  console.log('handleMain');
  const ext = path.extname(url);
  const mimiTypes = {
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
  };

  const filepath = path.join(__dirname, '..', 'public', url);
  fs.readFile(filepath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('server error');
    } else {
      response.writeHead(200, { 'Content-Type': mimiTypes[ext] });
      response.end(file);
    }
  });
};

const handleSearch = (request, response) => {
  console.log('handlesearch');

  const filepath = path.join(__dirname, 'cities.json');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      return response.end('<h1>server error</h1>');
    }

    const citiesFile = JSON.parse(file);
    const arr = citiesFile['United States'];
    console.log({ arr });
    const inp = request.url.split('/')[2];
    console.log({ inp });
    result = search(inp, arr);

    console.log({ result });
    response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
  });
};


module.exports = {
  handleMain, handlePublic, handleSearch,
};
