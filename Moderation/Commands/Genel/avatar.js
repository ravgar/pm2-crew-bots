const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton  } = require("discord.js");

module.exports = {
    name: "avatar",
    about: "(ktria)",
    aliases: ["pp","av"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        var member = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
	if(!member) return message.channel.send({ embeds: [embed.setDescription("Geçerli bir kullanıcı belirt!")]})

        let pp = member.displayAvatarURL({dynamic:true, size: 4096})
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL(`${pp}`)
            .setStyle('LINK')
            .setLabel('Avatar')
        )
        message.channel.send({content:`${member.displayAvatarURL({dynamic:true, size: 4096})}`, components:[row]})
    }
}

