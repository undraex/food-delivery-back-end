const jwt = require("jsonwebtoken");
const JWT_SECRET = "kiss";

const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: "24h" });
};

module.exports = { generateToken };
