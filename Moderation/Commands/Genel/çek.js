const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton ,Message  } = require("discord.js");

module.exports = {
    name: "çek",
    about: "(ktria)",
    aliases: ["31","check"],
    run: async (client, message, args, guild, cekic, onay, red) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({ content: 'Bir kullanıcı belirtmelisin!'})
        if(!message.member.voice.channel) return message.reply({ content: 'Sesli kanala giriş yapmalısın!'})
        if(!member.voice.channel) return message.reply({ content: 'Etiketlediğin kullanıcı bir ses kanalında bulunmamakta!'})
        if(message.member.voice.channel === member.voice.channel) return message.reply({ content: 'Etiketlediğin kullanıcı ile aynı ses kanalındasın!'})
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
                await member.voice.setChannel(message.member.voice.channel.id)
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