const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require("../../Schema/guild")
const bandata = require("../../Schema/ban")
const moment = require('moment')
moment.locale("tr")

module.exports = {
    name: "banbilgi",
    about: "(arabamdacia)",
    aliases: ["bilgiban"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        let db = await data.findOne({ guild:message.guild.id })
        if(!db.banhammer.some(suheda => message.member.roles.cache.has(suheda)) && !message.member.permissions.has("BAN_MEMBERS") && !message.member.permissions.has("ADMINISTRATOR")) return;  
        const member = message.mentions.member.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({ content: 'Kimin banın bilgisini alıcan oropsu evladı belirtsene'});
        let ban = await bandata.findOne({ guild: message.guild.id, user: member.id })
        const embed = new MessageEmbed()
        await message.guild.fetchBan(args.slice(1).join(' ')).then(({ user, reason }) => message.channel.send({embeds:[embed.setDecription(`banlı üye:  \`${user.tag} (${user.id})\` ban sebebi: \`${reason ? reason : "bilgi yok"}\``)]}))
        message.react(onay)
        const msg = new MessageEmbed()
        .setDescription(`${member} adlı kullanıcının ban bilgisi aşağıda belirtilmiştir;`)
        .setColor("RANDOM")
        .addFields([
            { name: "Cezalandırılan", value: `${ban.user}`, inline:true},
            { name: "Cezalandıran", value: `${ban.staff}`, inline:true},
            { name: "Ceza Sebebi", value:`\`\`\`diff
- ${ban.reason}\`\`\``, inline:false},
            { name: "Tarih", value: `${moment(ban.date)}`},
            { name: "Ban türü", value: `${ban ? ban.perma : "Kalıcı"}`}
        ])
        message.reply({ embeds: [msg] })
    }
}