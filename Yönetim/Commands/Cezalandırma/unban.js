const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
const data = require('../../Schema/ban')
const setupdata = require("../../Schema/guild")
module.exports = {
    name: "unban",
    about: "(pikuxd)",
    aliases: ["banac","ocluktankurtar","sikme"],
    run: async (client, message, args, guild, embed, onay, red, cekic) => {
        let db = await setupdata.findOne({guild:message.guild.id})
        if(!db.banhammer.some(kole => message.member.roles.cache.has(kole)) && !message.member.permissions.has("BAN_MEMBERS") && !message.member.permissions.has("ADMINISTRATOR")) return;       
        message.guild.bans.fetch(args[0]).then(async ( pig ) => {
            if (message.member.roles.highest.position <= pig.user.roles.highest.position) return message.reply({content:`Sizinle aynı/üst role sahip bir kişiye işlem yapamazsınız!`})
            const dt = await data.findOne({guild:message.guild.id, user: pig.user.id})
            if(!dt.user) return message.reply({content:`Veri tabanında kullanıcı bulunamadı.`})
            await message.guild.bans.remove(pig.user, {reason:`${message.author.tag} ban kaldırdı.`}).then( user => { message.reply({content:`${user} kullanıcısının banı kaldırıldı.`}) }).catch(err => { message.reply({content:`Bir hata oluştu.`}) })
            await data.deleteOne({guild: message.guild.id , user: pig.user.id })
            const embed2 = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<t:${Math.floor(Date.now() / 1000)}> tarihinde , ${pig.user} kullanıcısı ${message.author} tarafından uzaklaştırılması kaldırıldı.`)
            .addFields([
                {name: "Cezalandırılan", value: `${pig.user}`, inline:true},
                {name: "Ceza Kaldıran", value: `${message.author}`, inline:true}
            ])
            await client.channels.cache.find(x => x.name === "ban_log").send({embeds:[embed2]})
        })
    }
}
