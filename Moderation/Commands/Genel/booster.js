const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require("../../Schemas/guild")
module.exports = {
    name: "booster",
    about: "(ktria)",
    aliases: ["zengin","zenginimmoruk"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        let db = data.findOne({guild:message.guild.id})
        if(!message.member.roles.cache.some(r => ["1048564217046896651"].includes(r.id))) return message.reply({content:`sunucuya boost basmalısınız.`})
        const yasaklı = ["discord.gg/",".gg/"]
        let nick = args.slice(0).join(" ");
        if(!nick) return message.reply({content:`bir isim belirtin`})
        if(yasaklı.some(x => nick.toLowerCase().includes(x))) return message.react(red)
       message.member.setNickname(nick).catch(e => {})
       await message.reply({embeds:[embed.setDescription(`${message.author}, isminiz başarıyla \`${nick}\` olarak değiştirildi.`)]})

    }

}

