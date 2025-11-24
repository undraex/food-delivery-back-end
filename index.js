const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

const userRouter = require("./routes/userRoutes");
const foodCategoryRouter = require("./routes/foodCategoryRoutes");
const authenticationRouter = require("./routes/authentication");
const foodRouter = require("./routes/foodRoutes");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

("mongodb+srv://undrahx:cherry0618@food-delivery.xjsseva.mongodb.net/");

connectToDB();

app.use("/user", userRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/authentication", authenticationRouter);
app.use("/food", foodRouter);

app.get("/", (req, res) => {
  res.send("hello world, working");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
