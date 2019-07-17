const bodyParser = require('body-parser');
const express = require('express');
const next = require('next');
const path = require('path');

const config = require('./next.config');

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '.');
const port = process.env.PORT ? process.env.PORT : 3000;
const app = next({
  config,
  dev,
  dir
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  server.use((req, res) => app.render(req, res, req._parsedUrl.pathname, req.query));

  server.get('*', (req, res) => {
      handle(req, res, parsedUrl)
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log("> Ready on Server Port: " + port)
  })
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})
