const { eventLogger } = require('./logger');

/**
 * handler system-wide errors  and logs them into a error.log
 * @param {*} error
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const errorHandler = (error, request, response, next) => {
  const err = `${error.name}\t${error.message}`;
  const message = `${err}\t${request.method}\t${request.url}\t${request.headers.origin}\n`;

  eventLogger(message, 'errors.log');
  console.log(message);

  next();
};

module.exports = errorHandler;
