const express = require("express");
const dotenv = require('dotenv');

const authRoutes = require("./routes/authRoutes");

//env variables
dotenv.config();
const PORT = process.env.PORT;

const app = express();

//Middlewares
app.use(express.json());

app.use("/auth", authRoutes);
app.

app.listen(PORT,
    function () {
        console.log(`Server started on ${PORT}`);
    })
