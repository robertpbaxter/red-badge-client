const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(`${__dirname}/dist/nest-capstone-project`));

app.get("/*", function(req, res) {
  res.send("Accessing angular server.js");
  // res.sendFile(path.join(`${__dirname}/dist/nest-capstone-project/index.html`));
});

app.listen(process.env.PORT || 4200);
