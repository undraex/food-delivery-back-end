const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchemas");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

("mongodb+srv://undrahx:cherry0618@food-delivery.xjsseva.mongodb.net/");

connectToDB();

app.get("/", async (req, res) => {
  console.log(req.body, "req");
  const { firstName, email, password, address, phoneNumber } = req.body;
  try {
    const data = await UserModel.create({
      firstName: firstName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });

    console.log("Created user:", data);

    res.json("User created successfully!");
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
