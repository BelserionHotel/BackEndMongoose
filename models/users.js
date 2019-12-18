const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    Surname: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    zip: {
      type: String,
      required: false
    },
    password: {
      type: String,
      required: true
    },
    Role_id: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "roles"
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
