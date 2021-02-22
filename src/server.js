const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("lalala 61070346");
});

module.exports = app;
