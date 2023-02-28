/**
 * Catch all error inside the controller. Don't need to use try-catch/ error handler
 * It handles error handling for you and just wrap the function(controller) with this function
 */
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
