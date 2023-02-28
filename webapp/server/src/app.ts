import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';

import rootRoute from './routes/root.route';
import errorController from './controllers/error.controller';
import headersMiddleware from './middlewares/headers.middleware';
import { CORS_CONFIG, RATE_LIMIT_CONFIG } from './common/config';
import invalidRouteController from './controllers/invalidRoute.controller';

const app = express();

/** MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(CORS_CONFIG));
app.use(headersMiddleware);
app.use(helmet());
app.use(compression());
app.use(rateLimit(RATE_LIMIT_CONFIG));

/** ROUTES */
app.use('/api/v1', rootRoute);

/** UNKNOWN ROUTE */
app.use('*', invalidRouteController);

/** GLOBAL ERROR HANDLER */
app.use(errorController);

export default app;
