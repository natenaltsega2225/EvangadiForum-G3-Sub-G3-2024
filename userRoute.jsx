const express = require("express");
const router = express.Router();

//user controller
const {
  register,
  login,
  checkUser,
} = require("../controller/userController.jsx");

//register route
router.post("/register", register);
//login user
router.post("/login", login);

//check user
router.get("/check", checkUser);

module.exports = router;