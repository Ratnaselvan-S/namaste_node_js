const express = require("express");

const app = express();

const connectDb = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user data stored succesfull");
  } catch (err) {
    res.status("404").send("something went wrong: " + err);
  }
});
connectDb()
  .then(() => {
    console.log("Data base connected succesfully");
    app.listen(7777, () => {
      console.log("Server started");
    });
  })
  .catch((error) => {
    console.error("Something went wrong" + error);
  });
