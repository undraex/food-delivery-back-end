const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const putFoodCategory = async (req, res) => {
  const { id, firstName, email, password, address, phoneNumber } = req.body;

  try {
    const data = await FoodCategoryModel.findByIdAndUpdate(
      id,
      { categoryName },
      { new: true }
    );

    if (!data) {
      return res.status(404).json(`Food category not found`);
    }

    return res.status(200).json(`food category updated: ${data}`);
  } catch (err) {
    return res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = putFoodCategory;
