const {model,Schema} = require("mongoose")

const otuzbir = new Schema({
  guild: String,
  user: String,
  staff: String,
  reason: String,
  date: Date,
  perma: Boolean, default:false
});

module.exports = model("ban_meta", otuzbir)