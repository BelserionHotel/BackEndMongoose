const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Surname: {
    type: String,
    required: false
  },
  Email: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"]
  },
  PhoneNumber: {
    type: Number,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  User_id: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "users"
  }
});

const Customers = mongoose.model("customers", customerSchema);

module.exports = Customers;
