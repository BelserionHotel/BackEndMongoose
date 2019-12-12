const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
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
    ref: "roles"
  }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
