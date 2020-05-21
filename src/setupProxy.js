const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mockapi.eolinker.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/HKNGYTn83f9a16f0dc3332285b5b641b0221a033925ab7b'
      }
    })
  );
};