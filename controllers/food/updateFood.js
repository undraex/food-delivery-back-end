const FoodModel = require("../../schemas/foodSchema");

const putFood = async (req, res) => {
  const { foodname, price, image, incredients, category } = req.body;

  try {
    const updatedFood = await FoodModel.findByIdAndUpdate(id, {
      foodname,
      price,
      image,
      incredients,
      category,
    });

    if (!updatedFood) {
      return res.status(404).json("not found");
    }

    res.status(200).json(updatedFood);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putFood;
