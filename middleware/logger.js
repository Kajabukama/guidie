const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fsPromise = require('fs').promises;
const fs = require('fs');
const path = require('path');

/**
 * system wide event logger
 * @param {*} message
 * @param {*} fileName
 */
const eventLogger = async (message, fileName) => {
  const dateTime = `${format(new Date(), `yyyyMMdd\tHH:mm:ss`)}`;
  const loggedItem = `${dateTime}\t${uuid().split('-').join('')}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromise.mkdir(path.join(__dirname, '..', 'logs'));
    }
    fsPromise.appendFile(
      path.join(__dirname, '..', 'logs', fileName),
      loggedItem
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * general logger function
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const logger = (request, response, next) => {
  const message = `${request.method}\t${request.url}\t${request.headers.origin}`;
  eventLogger(message, 'requests.log');
  console.log(message);
  next();
};

module.exports = { logger, eventLogger };
