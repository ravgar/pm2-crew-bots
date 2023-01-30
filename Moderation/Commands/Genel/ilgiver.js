const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "ilgiver",
    about: "(ktria)",
    aliases: ["ilgi","av"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({ content: 'Kime ilgi vermemi istiyorsun belirt!'})
        message.reply({content:`${member} kişisine ilgi verildi!`})
        message.react(cekic)
        //BİTTİ S VE J
    }

}