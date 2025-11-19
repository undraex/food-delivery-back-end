const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { user } = req;

  try {
    const hashedPassword = user.password;

    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatching) {
      res.status(404).json(`password not matching`);
    } else {
      res.status(200).json(`user: ${user}`);
    }
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = loginUser;
