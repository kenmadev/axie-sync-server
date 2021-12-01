const HttpErrors = require('http-errors');
const isEmpty = require('lodash/isEmpty');

const errorStatusHandler = (err, res = {}, data = {}) => {
  const error = !(err instanceof HttpErrors.HttpError)
    ? new HttpErrors.InternalServerError(err.message)
    : err;

  console.log(`ERROR: status handler - ${error.message}`);
  const resObject = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
  };

  // additiona data params
  if (!isEmpty(data)) {
    resObject.data = data;
  }

  // if res is empty return the object
  if (isEmpty(res)) {
    return resObject;
  }

  res.status(error.statusCode).json(resObject);
};

module.exports = {
  HttpErrors,
  errorStatusHandler,
};
