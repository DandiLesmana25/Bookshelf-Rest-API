const { createBookHandler, getAllBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: createBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
];

module.exports = routes;
