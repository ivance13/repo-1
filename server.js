const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({

i cvouit cvouit voiut oiutp iut piut8o75897509875 v09875o87t578 rt5786r7ied6rfty;oiuy;oiu b;oiy bpiouty cviup
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
