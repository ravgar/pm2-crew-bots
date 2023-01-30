const { MessageEmbed,MessageActionRow,MessageButton, DataManager, Discord } = require("discord.js")
const elchavo = require("../../Schema/guild")

module.exports = {
    name: "kayıtsız",
    aliases: ["unregister"],
    about: "(ktria)",
    
    run: async (client, message, args, embed) => {
const db = await elchavo.findOne({guild:message.guild.id})

        if(!message.member.roles.cache.has(db.registerhammer) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds:[embed.setDescription(`Bunun için yeterli yetkin bulunmamakta.`)]})
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if(!member) return message.channel.send({ embeds: [embed.setDescription("Geçerli Bir Üye Belirt!")]});
  if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send({embeds: [embed.setDescription("Bu üyenin yetkileri senden yüksek veya aynı yetkide olduğun için işlem iptal edildi :x:")]});



        member.roles.set(db.kayitsiz)
        message.channel.send({ embeds:[ embed.setDescription(`${member} \` Kayıtsıza \` Atıldı. ${client.emojis.cache.find(x => x.name === "ktriaonay")}\nKayıtsıza Atılma Tarihi: <t:${Math.floor(Date.now() / 1000)}>`)]})
     
    }
}