const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservation = new Schema(
  {
    DateTime: {
      type: Date,
      required: true,
      default: Date.now
    },
    Code: {
      type: String,
      required: true
    },
    Customer_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "customers"
    }
  },
  { timestamps: true }
);

const Reservations = mongoose.model("reservations", reservation);

module.exports = Reservations;
