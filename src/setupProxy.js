const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/najangbot/api", {
      target: "https://g2b-bot.herokuapp.com",
      changeOrigin: true,
    })
  );
};
