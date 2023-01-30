const { MessageEmbed } = require("discord.js")
const data = require("../../Schema/guild")
const set = require("../../../settings")
module.exports = {
    name: "say",
    aliases: ["say","istatistik"],
    about: "(ktria)",

    run: async (client, message, args, embed) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       if(!db.tag) return message.reply({content:`Sunucu kurulumu tamamlanmamış`})
        let tags = set.tags
//        
let tagges = message.guild.members.cache.filter(s => tags.some(a => s.user.tag.toLowerCase().includes(a))).size

        message.reply({embeds:[embed.setDescription(`
        \`>\` Toplam üye: \`${message.guild.memberCount}\` (${message.guild.members.cache.filter((mem) => mem.presence && mem.presence.status !== 'offline').size} aktif)
        \`>\` Booster sayısı: \`${message.guild.premiumSubscriptionCount}\` (${message.guild.premiumTier.replace("TIER_", "")}. seviye)
        \`>\` Anlık ses: \`${message.guild.members.cache.filter(m => m.voice && m.voice.channel).size}\`
        \`>\` Taglı sayısı: \`${tagges}\`
        `)]
        })
    }
}