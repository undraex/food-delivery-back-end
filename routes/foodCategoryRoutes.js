const express = require("express");
const createFoodCategory = require("../controllers/foodCategory/createFoodCategory");
const getFoodCategory = require("../controllers/foodCategory/getFoodCategory");
const deleteFoodCategory = require("../controllers/foodCategory/deleteFoodCategory");
const updateFoodCategory = require("../controllers/foodCategory/updateFoodCategory");
const verifyJwt = require("../middleware/verifyJWT");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", verifyJwt, updateFoodCategory);

foodCategoryRouter.delete("/", deleteFoodCategory);

foodCategoryRouter.post("/", createFoodCategory);

module.exports = foodCategoryRouter;
