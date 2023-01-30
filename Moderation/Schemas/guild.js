const {model,Schema} = require("mongoose")

const guild = new Schema({
  guild: String,
  welcome: String,
  tag:{type:Array,default:[]},
  chat: String,
  untag: Array,
  rules: Array,
  tag: Array,
  erkek: Array,
  kadın: Array,
  kayitsiz: Array,
  crew: Array,
  booster: Array,
  vip: Array,
  yönetim: Array,
  cezali: Array,
  owner: Array,
  supheli: Array,
  cezali: Array,
  muted: Array,
  registerhammer: Array,
  banhammer: Array,
  mutehammer: Array,
  jailhammer: Array,
  taglıalım: Boolean,
  default: false,
  setup: Number,
});

module.exports = model("setup_meta", guild)