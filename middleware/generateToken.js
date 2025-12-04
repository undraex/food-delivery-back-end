const jwt = require("jsonwebtoken");
const JWT_SECRET = "kiss";

const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET);
};

module.exports = { generateToken };

// localStorage.setItem("authToken", response.data.token);

// toast.success("Login successful!");
// toast.error(err.response?.data || "User not found");
