const { generateToken } = require("../../middleware/generateToken");
const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
      res.status(404).json(`user: ${user}`);
    } else {
      const token = generateToken(user);
      res.status(200).json({ user: user, token: token });
    }
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = loginUser;
