const path = require("path");

require("@babel/register")({
  configFile: path.resolve(__dirname, "../babel.config.server.js"),
});

require("./express.js");
