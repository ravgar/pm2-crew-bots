const { MessageEmbed } = require("discord.js")
const data = require("../../Schema/guild")
const rdata = require("../../Schema/register")
module.exports = {
    name: "seslisay",
    aliases: ["sessay"],
    about: "(ktria)",

    run: async (client, message, args, embed) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       if(!db.tag) return message.reply({content:`Sunucu kurulumu tamamlanmamış`})
       
       let ravgarses = message.guild.members.cache.filter(s => s.voice.channel);
       let yayınko = ravgarses.filter(s => s.voice.streaming);
       let miko = ravgarses.filter(s => s.voice.selfMute).size;
       let kulakcık = ravgarses.filter(s =>  s.voice.selfDeaf).size;
       let yetkilicik = message.guild.members.cache.filter(x => {
        return x.voice.channel && x.roles.cache.has(!db.registerhammer)
    }).size

       
       message.reply({embeds:[embed.setDescription(`
       \`>\` Toplam Yayın: \`${yayınko.size}\`
       \`>\` Toplam Sesteki Yetkili: \`${yetkilicik}\`
       \`>\` Mikrofonu Kapalı: \`${miko}\`
       \`>\` Kulaklığı Kapalı: \`${kulakcık}\`
       \`>\` Toplam Sesli Üye: \`${message.guild.members.cache.filter(x => x.voice.channel).size}\`
       `)]})

    }
}
