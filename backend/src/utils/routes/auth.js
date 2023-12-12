const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//sign up
//http://localhost:4000/api/v1/register
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password });
    await user.save().then(() => {
      res.status(200).json({ user: user });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//SIGN IN
//http://localhost:4000/api/v1/signin
router.post("/signin", async (req, res) => {
  // console.log("in signin function");
  try {
    console.log("in try");
    const user = await User.findOne({ email: req.body.email });
    console.log("after check email");
    if (!user) {
      console.log("check user");
      req.status(400).json({ message: "this email is not exixt" });
    }
    if (user.password != req.body.password) {
      console.log("after check passward");
      req.status(400).json({ message: "this password is not exixt" });
    }
    const { password, ...other } = user._doc;
    res.status(200).json({ other });
  } catch (error) {
    res.status(400).json({ error: error.body });
  }
});

module.exports = router;
