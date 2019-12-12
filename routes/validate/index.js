const express = require("express");
const router = express.Router();

const { validate } = require("./controller")();
// const signup = require("./signup")

router.post("/:id", validate);
// router.post("/signup", signup);


module.exports = router;
