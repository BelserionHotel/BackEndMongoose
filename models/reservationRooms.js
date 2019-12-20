const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationRoomSchema = new Schema(
    {
        Customer_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "users"
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
            required: true
        },
        CheckOutDate: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
        Request: { type: String, required: true },
        ArrivalTime: { type: String, required: true }
    },
    { timestamps: true }
);

const reservationRooms = mongoose.model(
    "reservationRooms",
    reservationRoomSchema
);

module.exports = reservationRooms;
