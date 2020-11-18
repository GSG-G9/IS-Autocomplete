const http = require('http');
const router = require('./router');

const server = http.createServer(router);
require('env2')('.env');
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`The server is run on http://localhost:${port}`)
})

