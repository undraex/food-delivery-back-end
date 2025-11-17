const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const deleteFoodCategory = async (req, res) => {
  const { id } = req.body;
  try {
    await FoodCategoryModel.findByIdAndDelete(id);

    res.status(200).json(`food category deleted`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteFoodCategory;
