import authRoute from '##/routes/auth.routes.js';
import ecoGuideRoute from '##/routes/ecoGuide.routes.js';

async function routes(app) {
  app.use('/api/auth', authRoute);
  app.use('/api/eco', ecoGuideRoute);
}

export default routes;
