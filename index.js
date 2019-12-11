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


if(db) {
    app.listen(PORT, () => {
        console.log(`this app run on port ${PORT}`);
        
    })

}

