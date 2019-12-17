const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    RoomType_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "roomTypes"
    },
    RoomNumber: {
      type: String,
      required: true
    },
    RoomFloor: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: false
    },
    availability: Boolean
  },
  { timestamps: true }
);

const Rooms = mongoose.model("rooms", roomSchema);

module.exports = Rooms;
