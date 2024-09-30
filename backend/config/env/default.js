export default {
  app: {
    title: process.env.TITLE,
  },
  api: process.env.API,
  db: process.env.MONGO,
  log: {
    colorize: true,
    json: false,
  },
  package: {
    version: '1.0.0',
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV,

  jwt_access_key: process.env.ACCESS_KEY,
  jwt_public_key: process.env.PUBLIC_KEY,

  google: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    base_url: process.env.GOOGLE_BASE_URL,
  },
  facebook: {
    facebook_id: process.env.FACEBOOK_ID,
    facebook_secret: process.env.FACEBOOK_SECRET,
    base_url: process.env.FACEBOOK_BASE_URL,
  },

  /*
   * DOMAIN config should be set to the fully qualified application accessible
   * URL. For example: https://www.myapp.com (including port if required).
   */
  domain: {
    app: process.env.DOMAIN,
  },

  redis: {
    url: process.env.REDISCLOUD_URL || 'redis://127.0.0.1:6379',
    // NOTE: Though the Redis logical database can be embedded into the URL
    // (e.g., `redis://127.0.0.1:6379/1`), keep the database number in a
    // separate configuration parameter for simplicity. Any database number
    // in the URL will be overridden when the Redis connection is opened.
    db: 0,
  },
};
