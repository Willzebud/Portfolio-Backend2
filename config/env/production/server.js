// Path: ./config/env/production/server.js`
export default ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
