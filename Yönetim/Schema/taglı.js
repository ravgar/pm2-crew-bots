const {model,Schema} = require("mongoose")

const otuzbir = new Schema({
  guild: String,
  user: String,
  staff: String,
  date: Date,
  taglı: Boolean, default:false
});

module.exports = model("tag_meta", otuzbir)