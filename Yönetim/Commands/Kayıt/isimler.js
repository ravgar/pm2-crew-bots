const { MessageEmbed,MessageActionRow,MessageButton, DataManager } = require("discord.js")
const data = require("../../Schema/guild")
const rdata = require("../../Schema/register")
module.exports = {
    name: "isimler",
    aliases: ["nickler"],
    about: "(ktria)",

    run: async (client, message, args) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let redata = await rdata.findOne({guild:message.guild.id, user: member.id})
        if(!redata.name) return message.reply({content:`${member}, kullanıcısının kayıtlı isim verisi bulunmamaktadır.`})
        message.channel.send({content:`**__${redata.name}__** ismiyle kaydı var.`})
      
   
   }
}

