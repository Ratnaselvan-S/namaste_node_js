const express = require("express");

const app = express();

const { authmiddleware } = require("./Middlewares/auth");

// app.use("/", (req, res) => {
//   res.send("server noted");
// });
// app.use("/test", (req, res) => {
//   res.send("server tested");
// });

// app.use("/test/2", (req, res) => {
//   res.send("server 2 tested");
// });

app.use(
  "/user",
  (req, res, next) => {
    console.log("respnce");

    // res.send("first responce");
    next();
  },
  (req, res) => {
    console.log("second");
    res.send("second responce");
  },
);

app.get("/admin", authmiddleware, (req, res) => {
  res.send("send user data");
});

app.get("/users", (req, res) => {
  res.send({ firstname: "something" });
});
app.listen(7777, () => {
  console.log("Server started");
});
