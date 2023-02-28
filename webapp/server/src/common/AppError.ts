export default class AppError extends Error {
  statusCode: number;
  status: 'error' | 'fail';

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode < 500 ? 'error' : 'fail';

    Error.captureStackTrace(this, this.constructor);
  }
}
