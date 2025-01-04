const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const userRoutes = require('./routes/user.routes');
const candidateRoutes = require('./routes/candidate.routes');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    // await connectDb();
    console.log("Server started");
});