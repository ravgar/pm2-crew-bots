const {model,Schema} = require("mongoose")

const otuzbir = new Schema({
  guild: String,
  welcome: String,
  tag: {type:String,default:""},
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
  muted: Array,
  cezali: Array,
  registerhammer: Array,
  banhammer: Array,
  mutehammer: Array,
  jailhammer: Array,
  taglıalım: Boolean,
  default: false,
});

module.exports = model("setup_meta", otuzbir)