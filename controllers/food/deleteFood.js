const FoodModel = require("../../schemas/foodSchema");

const deleteFood = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await FoodModel.findByIdAndDelete(id);

    res.status(200).json(`food deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = deleteFood;
