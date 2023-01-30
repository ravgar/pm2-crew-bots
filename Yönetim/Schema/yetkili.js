const {model,Schema} = require("mongoose")

const otuzbir = new Schema({
  guild: String,
  user: String,
  staff: String,
  roller: Array,
  date: Date,
  yetkili: Boolean, default:false
});

module.exports = model("yetkili_meta", otuzbir)