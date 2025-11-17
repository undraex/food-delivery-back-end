const express = require("express");
const createFoodCategory = require("../controllers/foodCategory/createFoodCategory");
const getFoodCategory = require("../controllers/foodCategory/getFoodCategory");
const deleteFoodCategory = require("../controllers/foodCategory/deleteFoodCategory");
const updateFoodCategory = require("../controllers/foodCategory/updateFoodCategory");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", updateFoodCategory);

foodCategoryRouter.delete("/", deleteFoodCategory);

foodCategoryRouter.post("/", createFoodCategory);

module.exports = foodCategoryRouter;
