const bodyParser = require('body-parser');
const express = require('express');
const next = require('next');
const path = require('path');

const config = require('./next.config');

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, './src');
const port = process.env.PORT ? process.env.PORT : 3000;
const app = next({config,dev,dir});
const server = express();

const createServer = async () => {
  app.prepare();

  server.use(express.static('public'));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  server.use((req, res) => app.render(req, res, req._parsedUrl.pathname, req.query));

  return server;
}

const run = async () => {
  const server = await createServer();
  server.listen(port);
}

run();
