const express = require("express");
const createUser = require("../controllers/users/createUser");
const loginUser = require("../controllers/authentication/loginUser");

const isEmailExist = require("../middleware/isEmailExist");
const isUserExist = require("../middleware/isUserExist");

const authenticationRouter = express.Router();

authenticationRouter.post("/login", isUserExist, loginUser);
authenticationRouter.post("/sign-up", isEmailExist, createUser);

module.exports = authenticationRouter;
