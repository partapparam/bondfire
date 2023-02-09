const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    message: "name is required",
  },
  email: { type: String, required: true, message: "Email is required" },
  phone: Number,
  company: String,
})

const User = mongoose.model("User", usersSchema)

module.exports = User
