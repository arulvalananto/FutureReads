/**
 * Unknown API endpoint message
 */
export default (req, res) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} this route`,
  });
};
