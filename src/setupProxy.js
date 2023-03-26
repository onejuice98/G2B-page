const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/posts", {
      target: "https://g2b-bot.herokuapp.com",
      changeOrigin: true,
    }),
    createProxyMiddleware("/api/post", {
      target: "https://g2b-bot.herokuapp.com",
      changeOrigin: true,
    })
  );
};
