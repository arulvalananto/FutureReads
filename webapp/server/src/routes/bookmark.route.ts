import express from 'express';

import { getBookmarks } from 'src/controllers/bookmark.controller';

const route = express.Router();

route.get('/', getBookmarks);

export default route;
