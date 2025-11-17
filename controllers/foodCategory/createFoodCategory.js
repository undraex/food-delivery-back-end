const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const createFoodCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const data = await FoodCategoryModel.create({
      firstName: firstName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });

    res.status(201).json(`createdFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = createFoodCategory;
