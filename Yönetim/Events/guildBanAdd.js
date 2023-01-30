
const { MessageEmbed } = require("discord.js");
let moment = require("moment")
const data = require("../Schema/ban")
const set = require("../../settings")
module.exports = async (guild,user) => { 
    let entry = await guild.fetchAuditLogs({ type: 'MEMBER_BAN_ADD' }).then(audit => audit.entries.first());

//ayarlanacak

}