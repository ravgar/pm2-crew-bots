const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "link",
    about: "(ktria)",
    aliases: ["cokuzuldumlink","url"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply({ content: 'Gerekli yetkiler üstünde bulunmuyor!' })
        if(!message.guild.vanityUrlCode) return message.reply({ content:'Sunucunuza sahip bir url bulunamadı!' })

        let link = message.guild.fetchVanityData();
        message.channel.send({ content:`Toplam: \`${link.uses}\`\ndiscord.gg/${message.guild.vanityUrlCode}`})
    }
}