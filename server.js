const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/dist/nest-capstone-project`));

app.get("*", function(req, res) {
  res.sendFile(`./dist/nest-capstone-project/index.html`);
});

app.listen(process.env.PORT || 4200);
