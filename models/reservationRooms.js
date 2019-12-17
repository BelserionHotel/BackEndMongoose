const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationRoomSchema = new Schema(
  {
    Reservation_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "reservations"
    },
    Room_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "rooms"
    },
    StartDateTime: {
      type: Date,
      required: true,
      default: Date.now
    },
    DurationNights: {
      type: Number,
      required: true
    },
    RoomPrice: {
      type: Number,
      required: true
    },
    CheckInDate: {
      type: Date,
      required: false
    },
    CheckOutDate: {
      type: Date,
      required: false
    }
  },
  { timestamps: true }
);

const reservationRooms = mongoose.model(
  "reservationRooms",
  reservationRoomSchema
);

module.exports = reservationRooms;
