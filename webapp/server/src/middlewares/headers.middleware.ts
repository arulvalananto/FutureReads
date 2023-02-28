/**
 * config middleware for acess control allow headers
 */
export default (req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
};
