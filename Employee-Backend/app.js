const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

const employeeRoute = require('./Router/app');


let mongodbUrl = "mongodb://localhost:27017/NetMeds";

const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(employeeRoute);

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log("Mongoose Connect");
    app.listen(4000);
    console.log("App is listining Port No 4000");
}).catch(err => {
    console.log(err);
});