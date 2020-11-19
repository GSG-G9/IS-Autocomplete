const path = require('path');
const fs = require('fs');
require('http');

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
    '.js': 'text/javascript',
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

module.exports = { handleMain, handlePublic };
