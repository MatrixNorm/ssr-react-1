const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { Counter } = require("../src/Counter");

const app = express();

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, "../dist")));

app.use("*", (req, res) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
    encoding: "utf8",
  });

  let reactAppHTML = ReactDOMServer.renderToString(<Counter />);

  indexHTML = indexHTML.replace(
    '<div id="matrixnorm-app"></div>',
    `<div id="matrixnorm-app">${reactAppHTML}</div>`
  );

  res.contentType("text/html");
  res.status(200);
  return res.send(indexHTML);
});

app.listen("9000", () => {
  console.log("Express server started at http://localhost:9000");
});
