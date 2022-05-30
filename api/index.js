var express = require('express');
var app = express();

const route = require('./functions/route')
const stations = require('./functions/stations')

const port = process.env.PORT || 5000;


app.use("/route", route)
app.use("/stations", stations)

app.listen(port, () => {
    console.log("Server is running on Port 5000");

})