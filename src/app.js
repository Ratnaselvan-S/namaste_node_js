const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("server noted");
// });
// app.use("/test", (req, res) => {
//   res.send("server tested");
// });

// app.use("/test/2", (req, res) => {
//   res.send("server 2 tested");
// });

app.get("/users", (req, res) => {
  res.send({ firstname: "something" });
});
app.listen(7777, () => {
  console.log("Server started");
});
