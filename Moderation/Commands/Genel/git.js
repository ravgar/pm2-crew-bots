const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed,MessageButton  } = require("discord.js");

module.exports = {
    name: "git",
    about: "(ktria)",
    aliases: ["go"],
    run: async (client, message, args, guild, onay, red, cekic) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({content:`Bir kullanıcı belirtmelisiniz.`})
        if(!message.member.voice.channel) return message.reply({content:`Bir ses kanalında bulunmalısınız.`})
        if(!member.voice.channel) return message.reply({content:`Belirtilen kullanıcı ses kanalında bulunmalı.`})
        if(member.voice.channel.id == message.member.voice.channel.id) return message.reply({content:`Belirtilen kullanıcıyla aynı kanaldasınız.`})

const embed = new MessageEmbed()
const row = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId("onay")
    .setLabel("Onay")
    .setStyle("SUCCESS"),
    new MessageButton()
    .setCustomId("red")
    .setLabel("Red")
    .setStyle("DANGER")
)

const filter = (interaction) => interaction.user.id === member.id;
const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
const panel = await message.reply({embeds:[embed.setDescription(`Selam ${member}, ${message.author} adlı kullanıcı <#${message.member.voice.channel.id}> ses kanalına seni çekmek istiyor, kabul ediyor musun?`)], components: [row], ephemeral: true} )

    collector.on("collect", async (interaction) => {
        if(interaction.customId === "onay"){
            await interaction.deferUpdate()
            await message.react(cekic)
            await message.member.voice.setChannel(member.voice.channel.id)
            await panel.delete()
        }
        if(interaction.customId === "red"){
            await interaction.deferUpdate()
            await message.react(red)
            await panel.delete()
        }
    })
}
}
