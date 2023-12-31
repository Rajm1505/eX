const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        unique: true,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    avatar : {
        type: String,
        required: true
    },
});

const User = new mongoose.model('User',schema);
module.exports = User;