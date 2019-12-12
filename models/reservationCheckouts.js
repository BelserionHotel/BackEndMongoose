const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationCheckOutSchema = new Schema({
  ReservationRoom_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "reservationRooms"
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
