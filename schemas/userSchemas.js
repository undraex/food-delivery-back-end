const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    phoneNumber: {
      type: String,
    },

    address: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);
module.exports = UserModel;
