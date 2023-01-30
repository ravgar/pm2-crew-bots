const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require("../../Schema/guild")
module.exports = {
    name: "yardım",
    about: "(ktria)",
    aliases: ["help","komutlar"],
    run: async (client, message, args, guild,  onay, red, cekic) => {
        let db = data.findOne({guild:message.guild.id})
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        const embed = new MessageEmbed().setColor("RANDOM")
        message.reply({embeds:[embed

.setTitle(`${client.commands.size} komut aktif!`)
.setDescription(`${client.commands.map(s => `\`.${s.name} (${s.about ? `${s.about}` : "Ayarlanmamış"})\``).join('\n')}`)]})
    }

}

