const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>Hello Programmrs!</h1>");
  res.end();
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
