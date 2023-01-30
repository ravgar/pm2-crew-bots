const {model,Schema} = require("mongoose")

const otuzbir = new Schema({
    guildId: String,
    userId: String,
    executorId: String,
    reason: String,
    edited: Array,
    until: Date
});

module.exports = model("data_cmute", otuzbir)