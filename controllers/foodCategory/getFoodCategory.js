const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const getFoodCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await FoodCategoryModel.findById(id);

    if (!data) {
      throw new Error("Food category not found");
    }

    res.status(200).json(`Food category: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = getFoodCategory;
