/**
 * Get all bookmarks by user id
 * @alias /api/v1/bookmark
 * @method GET
 * @param req
 * @param res
 * @param next
 */
export const getBookmarks = (req, res, next) => {
  try {
    res.json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.json({ message: 'Failure' });
  }
};
