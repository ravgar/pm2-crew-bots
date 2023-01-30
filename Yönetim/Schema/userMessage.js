const {model,Schema} = require("mongoose")

const userMsg = new Schema({
  guild: String,
  user: String,
  top: Number,
  daily: Number,
  weekly: Number,
  monthly: Number
});

module.exports = model("user_message_meta", userMsg)