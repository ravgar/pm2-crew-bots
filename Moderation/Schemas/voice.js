const { model, Schema } = require('mongoose')

const sema = new Schema({
    channelId: String,
    userId: String,
    self_mute: Boolean,
    self_deaf: Boolean,
    server_mute: Boolean,
    server_deaf: Boolean,
    streaming: Boolean,
    webcam: Boolean,
    playing: Boolean
}, {
    timestamps: {
        createdAt: "created"
    }
})
// sema :(
module.exports = model("voice_meta", sema)