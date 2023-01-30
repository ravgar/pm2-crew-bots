const {model,Schema} = require("mongoose")

const whitelist = new Schema({
  __id: String,
  guild: String,
  full: Array, default: [],
  rolchannel: Array, default: [],
  permission: Array, default: []
});

module.exports = model("wihtelist_member", whitelist)