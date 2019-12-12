const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomTypeSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Capacity: {
    type: Number,
    required: true
  },
  RoomPrice: {
    type: Number,
    required: true
  },
  roomImage: {
    type: String,
    required: true
  }
});

const RoomTypes = mongoose.model("roomTypes", roomTypeSchema);

module.exports = RoomTypes;
