const router = require("express").Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
//Models
const UserModel = require("../models/userModel");