const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: validator.isEmail,
    unique: [true, "Email mora biti jedinstven"],
  },
  type: {
 uytfvuiytfv
module.exports = Akademija;
