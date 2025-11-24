const FoodModel = require("../../schemas/foodSchema");

const createFood = async (req, res) => {
  const { foodname, price, image, incredients, category } = req.body;
  try {
    const data = await FoodModel.create({
      foodname: foodname,
      price: price,
      image: image,
      incredients: incredients,
      category: category,
    });
    console.log(data);
    res.status(201).json(`created food:${data}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};
module.exports = createFood;
