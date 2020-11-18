const { handleMain } = require('./handlers.js')
const router = (request, response) => {
    const endPoint = request.url;
    if (endPoint === '/') {
        handleMain(response);
    }
}

module.exports = router;