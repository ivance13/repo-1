

module.exports = Akademija;
const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mora da ima ime"],
    minlength: 1,
    maxlength: [30, "Ime je predugacko"],
  },

    ref: "Akademija",
  },
});

const Akademija = mongoose.model("Kurs", kursSchema);

module.exports = Akademija;
