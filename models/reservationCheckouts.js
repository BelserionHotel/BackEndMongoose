const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationCheckOutSchema = new Schema(
  {
    ReservationRoom_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "reservationRooms"
    },
    payment_type: {
      type: String,
      required: true,
    },
    cc_number: {
      type: String,
      required: true,
    },
    TotalCharges: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const ReservationCheckouts = mongoose.model(
  "reservationCheckouts",
  ReservationCheckOutSchema
);

module.exports = ReservationCheckouts;
