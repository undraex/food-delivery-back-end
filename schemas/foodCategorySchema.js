const { model, Schema } = require("mongoose");

const FoodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
    },
  },
  {
    timestamps: true,
  }
);

const FoodCategoryModel = model("foodCategory", FoodCategorySchema);
module.exports = FoodCategoryModel;
