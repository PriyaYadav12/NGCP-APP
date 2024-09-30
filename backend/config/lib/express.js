import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import config from '##/config/config.js';
import routes from '##/routes/main.routes.js';

function initSecurityHeaders(app) {
  // Six months expiration period specified in seconds
  const SIX_MONTHS = 15778476;
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(
    helmet.hsts({
      maxAge: SIX_MONTHS,
      includeSubDomains: true,
      force: true,
    }),
  );
  app.disable('x-powered-by');
}

function initMiddleware(app) {
  app.use(
    express.json({
      limit: '5mb',
    }),
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: config.domain,
      credentials: true,
    }),
  );
  app.use(cookieParser());
}

async function init() {
  const app = express();
  initSecurityHeaders(app);
  initMiddleware(app);
  app.use(cors());
  app.use(express.json());
  await routes(app);

  return app;
}

export { init };
