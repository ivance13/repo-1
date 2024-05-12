const mongoose = require("mongoose");
const validator = require("validator");

const kursSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: validator.isEmail,
    unique: [true, "Email mora biti jedinstven"],
  },
  type: {
    type: String,
    required: [true, "Mora da ima oblast"],
    minlength: 1,
    maxlength: [30, "Oblast je predugacka"],
  },
});
owieryhnyt4ipoe5ypt4pypyvbuwetipoyvbuwetnipybunpwoetywbnetipybuwntpoibuywtp
wetyweiouyvbwehnpiovbywenporiyvbwenpoivbywenpoivbywebnvipoywevnipowerybnwepoiyvb
wetpyioweyvpowei5yvpweioyvbwernpoivywernipvbyeiowerywbnipoerybnweripoyvweripoyep
const Akademija = mongoose.model("Kurs", kursSchema);

module.exports = Akademija;
