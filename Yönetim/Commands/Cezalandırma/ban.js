const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require("../../Schema/guild")
const bandata = require("../../Schema/ban")
module.exports = {
    name: "ban",
    about: "(ktria)",
    aliases: ["banned","fuckyou","uza","manitanasöylebizitanır"],
    run: async (client, message, args, embed) => {
        let db = await data.findOne({guild:message.guild.id})
        if(!db.banhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("BAN_MEMBERS") && !message.member.permissions.has("ADMINISTRATOR")) return;       
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply({ content: 'Bir kullanıcıyı belirtmelisin!' })
        const reason = args.slice(1).join(" ")
        if (!reason) return message.reply({ content: 'Kullanıcıyı neden banlandığını belirtmelisin!'})
        if(member.id === message.author.id) return message.reply({ content:`Kendini banlayamazsın!` })
        if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply({ content:`Sizinle aynı/üst role sahip bir kişiye işlem yapamazsınız!` })
        await member.ban({ reason: reason }) 
        await bandata.findOneAndUpdate({ guild: message.guild.id, user: member.id }, {$set: { staff: message.author.id, reason: reason , date: Date.now() }}, { upsert:true })
        const embed2 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<t:${Math.floor(Date.now() / 1000)}> tarihinde , ${member} kullanıcısı ${message.author} tarafından uzaklaştırıldı`)
        .addFields([
            {name: "Cezalandırılan", value: `${member}`, inline:true},
            {name: "Cezalandıran", value: `${message.author}`, inline:true},
            {name: "Ceza Sebebi", value:`\`\`\`diff
- ${reason}\`\`\``, inline:false}
        ])
        await client.channels.cache.find(x => x.name === "ban_log").send({embeds:[embed2]})
     
    }
}
