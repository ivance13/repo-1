

module.exports = Akademija;
const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mora da ima ime"],uoiytv ou8t
    minlength: 1,
    maxlength: [30, "Ime je predugacko"],
  },

    ref: "Akademija",
  },987ty0986g0986g0986g-0896g0986g0986giuyoguiyg7it7635s7534s6542g8o75gi8poi7gp9876p987hb9ej[w0975j[957eyb[s0e97hsej[095byujs5ip
});

const Akademija = mongoose.model("Kurs", kursSchema);

module.exports = Akademija;
