const search = (input, searchData) => {
// return searchData.filter((item) => {
//   item.substr(0, input.length).toUpperCase() == input.toUpperCase();
// });
// }
  const arr = [];
  searchData.forEach((item) => {
    if (item.substr(0, input.length).toUpperCase() == input.toUpperCase()) {
      arr.push(item);
    }
  });
  return arr;
};

if (typeof module !== 'undefined') {
  module.exports = search;
}
