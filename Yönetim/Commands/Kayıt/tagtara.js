const { MessageEmbed,MessageActionRow,MessageButton, DataManager } = require("discord.js")
const elchavo = require("../../Schema/guild")
const set = require("../../../settings")
module.exports = {
    name: "tagtara",
    aliases: ["tagtara"],
    about: "(ktria)",

    run: async (client, message, args, embed) => {
const db = await elchavo.findOne({guild:message.guild.id})
        if(!message.member.roles.cache.has(!elchavo.registerhammer) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds:[embed.setDescription(`Bunun için yeterli yetkin bulunmamakta.`)]})

        let tag = set.tags
        let taglılar = await message.guild.members.cache.filter(s => tag.some(a => s.user.tag.toLowerCase().includes(a))).forEach(e => e.roles.add("1066474665981255780"))

        message.reply({ embeds: [embed.setDescription(`
                            Kullanıcı adında tag bulunduran herkese taglı rolü verilmeye başlandı!.`
                            )] 
                        })

            
    }

}