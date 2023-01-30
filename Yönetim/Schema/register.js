const {model,Schema} = require("mongoose")

const register = new Schema({
  guild: String,
  user: String,
  name: String, 
  staff: String,
  top: Number,
  man: Number,
  woman: Number,
  date: Date,
  date2: Date,
  true: Boolean, default:false
});

module.exports = model("register_meta", register)