const {model,Schema} = require("mongoose")

const reg = new Schema({
    guild: String,
    yetkili: String,
    üye: String,
    erkek: Number,
    kadın: Number,
    top: Number,
    date: Date
})

module.exports = model("register_meta", reg)