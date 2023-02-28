import express from 'express';

import bookmarkRoute from './bookmark.route';

const route = express.Router();

route.use('/bookmark', bookmarkRoute);

export default route;
