const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("server tested");
});
app.listen(7777, () => {
  console.log("Server started");
});
