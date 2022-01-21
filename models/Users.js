const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String
    },
    basket: [],
    mobile: {},
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const token = mongoose.model("Users", usersSchema);
module.exports = token;