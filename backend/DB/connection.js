const mongoose = require("mongoose");
const dotenv = require("dotenv")

mongoose.connect(process.env.MONGO_DB_URL)