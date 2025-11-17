const UserModel = require("../../schemas/userSchemas");

const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await UserModel.findById(id);

    if (!data) {
      throw new Error("User not found");
    }

    res.status(200).json(`user: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = getUser;
