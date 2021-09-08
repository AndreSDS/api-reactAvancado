module.exports = ({ env }) => ({
  netlifyWebHook: env("NETLIFY_WEB_HOOK"),
});
