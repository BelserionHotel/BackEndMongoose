const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const {PORT, db} = require("./config")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));
app.use("/roles", require("./routes/roles"));
app.use("/roomTypes", require("./routes/roomTypes"));
app.use("/rooms", require("./routes/rooms"));
app.use("/customers", require("./routes/customers"));
app.use("/reservations", require("./routes/reservations"));
app.use("/reservationRooms", require("./routes/reservationRooms"));
app.use("/reservationCheckouts", require("./routes/reservationCheckouts"));


if(db) {
    app.listen(PORT, () => {
        console.log(`this app run on port ${PORT}`);
    })

}

