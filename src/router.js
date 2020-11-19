const path = require('path');
const { handleMain, handlePublic, handleSearch,handleCities } = require('./handlers.js');

const router = (request, response) => {
  const { method } = request;
  const endPoint = request.url;
  if (endPoint === '/') {
    handleMain(response);
  } else if (endPoint === '/search' && method === 'POST') {
    handleSearch(request, response);
  } else  if(endPoint ==='/cities'){
    handleCities(request,response)
}else if (path.extname(endPoint)) {
    handlePublic(response, endPoint);
  }
};

module.exports = router;
