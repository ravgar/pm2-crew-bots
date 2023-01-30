const { model, Schema } = require('mongoose')

const sn = new Schema({
    guildId: String,
    channelId: String,
    userId: String,
    msgContent: String,
    image: String,
    crtDate: Number,
    dltDate: Number
})

module.export = model("deletedmessage", sn)