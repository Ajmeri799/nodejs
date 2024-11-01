const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/idli", function (req, res) {
  res.send("Hello Idli");
});

app.get("/menu", function (req, res) {
  let mainCource = {
    idli: 200,
    pasta: 190,
    maggi: 150,
  };
  res.send(mainCource);
});

app.listen(4000, () => {
  console.log("server run successfully");
});
