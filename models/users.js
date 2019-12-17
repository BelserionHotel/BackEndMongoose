const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    DateCreated: {
      type: Date,
      required: true,
      default: Date.now
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
