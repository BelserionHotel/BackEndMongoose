const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Roles = mongoose.model("roles", rolesSchema);

module.exports = Roles;
