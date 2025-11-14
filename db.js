const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://undrahx:cherry0618@food-delivery.xjsseva.mongodb.net/"
    );
    console.log("DATABASE connection succes");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};
module.exports = connectToDB;
