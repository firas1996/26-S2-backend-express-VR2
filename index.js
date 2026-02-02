const express = require("express");

const app = express();

const port = 1122;

app.listen(port, () => {
  console.log(`The server is running on Port: ${port} !!!`);
});
