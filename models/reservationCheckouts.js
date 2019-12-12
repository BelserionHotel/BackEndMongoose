const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationCheckOutSchema = new Schema({
  Role_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "roles"
  },
  TotalCharges: {
    type: Number,
    required: true
  }
});

const ReservationCheckouts = mongoose.model(
  "reservationCheckouts",
  ReservationCheckOutSchema
);

module.exports = ReservationCheckouts;
