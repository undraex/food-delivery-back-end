const { model, Schema } = require("mongoose");

const FoodSchema = new Schema(
  {
    foodName: {
      type: String,
      // required: [true, "Food name is required"],
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodModel = model("food", FoodSchema);
module.exports = FoodModel;
