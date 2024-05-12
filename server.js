const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({


  type: {
    type: String,
    required: [true, "Mora da ima oblast"],
    minlength: 1,
    maxlength: [30, "Oblast je predugacka"],
  },
  akademija: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Akademija",
  },
});

const Akademija = mongoose.model("Kurs", kursSchema);

module.exports = Akademija;
