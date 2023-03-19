const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/najangbot2/api/posts", {
      target: "https://g2b-bot.herokuapp.com",
      pathRewrite: {
        "^/najangbot2": "",
      },
      changeOrigin: true,
    })
  );
};
