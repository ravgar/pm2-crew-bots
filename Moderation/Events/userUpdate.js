const { MessageEmbed } = require("discord.js")
const moment= require("moment");
require("moment-duration-format"); 
const set = require("../../settings")
const data = require("../Schemas/guild");

module.exports = async (olduser, newuser) => {
    let db = data.findOne({guild:newuser.guild.id})
    let tags = set.tags
    const guild = client.guilds.cache.get(db.guild);
    const member = guild.members.cache.get(olduser.id);
    const channels = guild.channels.cache.find(x => x.name === "tag_log");
    if(!guild) return;
    if(!member) return;
    if(tags.some(x => olduser.tag.toLowerCase().includes(x) && !newuser.tag.toLowerCase().includes(x))){
        let db = await data.findOne({guild:guild})
        await channels.send({content:`${member.toString()} kullanıcısı **${db.tag}** tagımızı ismine ekledi\n\nÖnce: ${olduser.tag} | Sonra: ${newuser.tag}`})
        await member.roles.add(db.crew)
    } else {
        let db = await data.findOne({guild:guild})
        await channels.send({content:`${member.toString()} kullanıcısı **${db.tag}** tagımızı ìsminden çıkardı\n\nÖnce: ${olduser.tag} | Sonra: ${newuser.tag}`})
        await member.roles.set([db.kayitsiz])
    }
}