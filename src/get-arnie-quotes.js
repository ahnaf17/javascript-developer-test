const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const promises = urls.map((url) => httpGet(url));

  const results = Promise.all(promises).then((values) => {
    return values.map((value) => {
      if (value.status === 200) {
        return { 'Arnie Quote': JSON.parse(value.body).message };
      } else {
        return { FAILURE: JSON.parse(value.body).message };
      }
    });
  });

  return results;
};

module.exports = {
  getArnieQuotes,
};
