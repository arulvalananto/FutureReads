/**
 * Transform error message into customized one
 * @param message
 * @returns
 */
const transform = (message) => {
  if (message.startsWith('E11000')) {
    return 'Already Exist';
  }
  return message;
};

export default (err, req, res, next) => {
  err.status = err.status || 'fail';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: transform(err.message),
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};
