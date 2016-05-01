var ghost = require('ghost');
var express = require('express');
var path = require('path');
var app = express();

ghost({config: path.join(__dirname, 'config.js')}).then(function (ghostServer) {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(app);
});
