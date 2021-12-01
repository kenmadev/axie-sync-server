'use strict';

const { NODE_ENV, SERVER_PORT = 3000 } = process.env;

module.exports = Object.freeze({
  SERVER_PORT: NODE_ENV === 'dev' ? 4000 : SERVER_PORT,
});
