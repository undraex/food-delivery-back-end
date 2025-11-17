const express = require("express");
const createUser = require("../controllers/users/createUser");
const getUser = require("../controllers/users/getUser");
const deleteUser = require("../controllers/users/deleteUser");
const putUser = require("../controllers/users/updateUser");

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.put("/", putUser);

userRouter.delete("/", deleteUser);

userRouter.post("/", createUser);

module.exports = userRouter;
