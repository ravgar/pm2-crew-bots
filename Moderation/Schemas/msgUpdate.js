const { model, Schema } = require('mongoose')

const updateMsg = Schema({
    guildId: String,
    channelId: String,
    userId: String,
    oldMessage: String,
    newMessage: String,
    date: Number
})

module.exports = model("messageUpdate_meta", updateMsg)