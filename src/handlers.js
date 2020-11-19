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
  let allData = '';

  request.on('data', (chunkOfData) => {
    allData += chunkOfData;
    const convertedData1 = querystring.parse(allData);
    console.log({ convertedData1 });
    //  parsedALlData
    console.log({ convertedData1 });

    const filepath = path.join(__dirname, 'cities.json');
    fs.readFile(filepath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        return response.end('<h1>server error</h1>');
      }

      const citiesFile = JSON.parse(file);
      // console.log({citiesFile})
      const arr = citiesFile['United States'];
      console.log({ arr });
      const inp = convertedData1.input;
      console.log({ inp });
      const result = search(inp, arr);
      console.log({ result });
      response.writeHead(200, { 'Content-Type': 'application/json' });
    });
  });

  request.on('end', () => {
    const convertedData = querystring.parse(allData);
    const filepath = path.join(__dirname, 'cities.json');
    fs.readFile(filepath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        return response.end('<h1>server error</h1>');
      }

      console.log({ convertedData });

      // allData += chunkOfData;
    });
  });
};

const handleCities = (request, response) => {
  const filepath = path.join(__dirname, 'results.json');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      response.writeHead(500, 'utf8', { 'Content-Type': 'text/html' });
      response.end('<h1>server error</h1>');
    } else {
      console.log({ file });
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(file);
    }
  });
};

module.exports = {
  handleMain, handlePublic, handleSearch, handleCities,
};
