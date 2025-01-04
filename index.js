const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

// const errorHandler = require("./middleware/errorhandler");
// const connectDb = require("./config/dbConnection");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    await connectDb();
    console.log("Server started");
})