const path = require('path');
const { handleMain, handlePublic } = require('./handlers.js')

const router = (request, response) => {
    const endPoint = request.url;
    if (endPoint === '/') {
        handleMain(response);
    }
    else if (path.extname(endPoint)) {
        handlePublic(response, endPoint);
    }
}

module.exports = router;