const path = require('path');
const fs = require('fs');

const handleMain = (response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h1> error with server </h1>')
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file);
        }

    })

}

module.exports = { handleMain };
