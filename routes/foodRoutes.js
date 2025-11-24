const express = require("express");

const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/updateFood");

const foodRouter = express.Router();

foodRouter.get("/", getFood);

foodRouter.put("/", putFood);

foodRouter.delete("/", deleteFood);

foodRouter.post("/", createFood);

module.exports = foodRouter;
