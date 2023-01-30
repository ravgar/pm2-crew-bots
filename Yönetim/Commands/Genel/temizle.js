const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

const setupD = require("../../Schema/guild");

module.exports = {
    name: "sil",
    about: "Bir sayı belirt (1-100)",
    aliases: ["temizle","clear"],
    run: async (client, message, args) => {
        let db = await setupD.findOne({ guild:message.guild.id })
        if (!db.yönetim.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;
        const embed = new MessageEmbed().setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setColor("RANDOM")
        if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) 
    return message.channel.send({embeds: [embed.setDescription(`1-100 arasında silinecek mesaj miktarı belirtmelisin!`)]}).then(x => {setTimeout(() => {x.delete()}, 5000);})
    await message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send({embeds:[embed.setDescription(`Başarıyla **${msjlar.size}** adet mesaj silindi!`)]})).then(x => {setTimeout(() => {x.delete()}, 5000);})

    }
}
