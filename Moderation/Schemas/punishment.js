const { model, Schema } = require('mongoose')

const hıkmık = new Schema({
    guild: String,
    yetkili: String,
    üye: String,
    sebep: String,
    date: Date,
    mutedurum: Boolean, default:false,
    vmutedurum: Boolean, default:false,
    jaildurum: Boolean, default:false,
    bandurum: Boolean, default:false,
})

module.exports = model("punishment_meta", hıkmık) 