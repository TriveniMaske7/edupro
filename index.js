var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(express.json());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect("mongodb://localhost:27017/eduprodb");

var db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.on('open', () => {
    console.log("Connected");
});


app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/admin/admin", require("./routes/admin"));
app.use("/admin/trainer",require("./routes/trainer"));

app.listen(8081, () => {
    console.log("Server Running is running on http://localhost:8081");

});