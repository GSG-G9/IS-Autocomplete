const path = require('path');
const { handleMain, handlePublic, handleSearch } = require('./handlers.js');

const router = (request, response) => {
  const { method } = request;
  const endPoint = request.url;
  if (endPoint === '/') {
    handleMain(response);
  } else if (endPoint.includes('/search') && method === 'GET') {
    handleSearch(request, response);
  } else if (path.extname(endPoint)) {
    handlePublic(response, endPoint);
  }
};

module.exports = router;
