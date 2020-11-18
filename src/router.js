const { handleMain } = require('./handlers.js')
const router = (response) => {
    const endPoint = request.url;
    if (endPoint === '/') {
        handleMain(request, response);
    }
}

module.exports = router;