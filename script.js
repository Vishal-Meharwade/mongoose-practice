const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

moongoose.connect(
  "mongodb+srv://vishalmeharwade1:123abc@cluster0.zqlgj.mongodb.net/newDatabase"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const exitingUser = await User.findOne({ email: username });

  if (exitingUser) {
    return res.status(400).send("User already exits");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "user account created!",
  });
});

app.listen(3000);
