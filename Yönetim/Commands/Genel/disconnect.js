const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require("../../Schema/guild")
module.exports = {
    name: "kes",
    about: "(ktria)",
    aliases: ["at","disconnect"],
    run: async (client, message, args, guild,  onay, red, cekic) => {
        let db = data.findOne({guild:message.guild.id})
        if(!db.yönetim.some(x => message.member.roles.cache.has(x)) && !message.member.permissions.has("ADMINISTRATOR")) return;
        const embed = new MessageEmbed().setColor("RANDOM")
        if(!message.member.voice.channel) return message.reply({content:`Bir ses kanalında bulunmalısınız.`})
        if(!member.voice.channel) return message.reply({content:`Belirtilen kullanıcı ses kanalında bulunmalı.`})
        if(member.voice.channel.id == message.member.voice.channel.id) return message.reply({content:`Belirtilen kullanıcıyla aynı kanaldasınız.`})
        let chn = member.voice.channel;
        await member.voice.kick().then(m => {
            message.reply({embeds:[embed.setDescription(`${member} kullanıcısının ${chn} kanalından bağlantısı kesildi!`)]})
        }).catch(e => {})
    }

}

