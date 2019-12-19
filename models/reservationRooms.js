const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationRoomSchema = new Schema(
  {
    Customer_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "customers"
    },
    Room_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "rooms"
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
    },
    Request: { type: String, required: false },
    ArrivalTime: { type: String, required: false }
  },
  { timestamps: true }
);

const reservationRooms = mongoose.model(
  "reservationRooms",
  reservationRoomSchema
);

module.exports = reservationRooms;
