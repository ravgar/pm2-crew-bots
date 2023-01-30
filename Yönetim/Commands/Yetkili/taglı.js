const { MessageEmbed,MessageActionRow,MessageButton, DataManager } = require("discord.js")
const data = require("../../Schema/guild")
const tagdata = require("../../Schema/taglı")
module.exports = {
    name: "taglı",
    aliases: ["taglım"],
    about: "(ktria)",

    run: async (client, message, args, cekic) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
       let veri = await tagdata.findOne({guild:message.guild.id, user:member.id})
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

       if(veri.taglı === false) {

                message.react(cekic)
                const filter = (interaction) => interaction.user.id === member.id;
                const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
                const panel = await message.reply({embeds:[embed.setDescription(`Selam ${member}, ${message.author} adlı kullanıcı sunucuya seni taglı olarak çektiğini iddi ediyor kabul ediyor musun?`)], components: [row], ephemeral: true} )
               
                collector.on("collect", async (interaction) => {
                    if(interaction.customId === "onay"){
                        await interaction.deferUpdate()
                        await message.react(cekic)
                        await tagdata.findOneAndUpdate({guild:message.guild.id, user: member.id}, {$set:{staff: message.author.id, date: Date.now(), taglı:true}}, {upsert: true})
                        await panel.delete()
                    }
                    if(interaction.customId === "red"){
                        await interaction.deferUpdate()
                        await message.react(red)
                        await panel.delete()
                    }
                })


            } else {
                message.reply({content:`belirtilen kullanıcı başka bir yetkili tarafından taglı işlemi yapılmış`})
       }
   
   }
}

