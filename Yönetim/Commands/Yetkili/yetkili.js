const { MessageEmbed,MessageActionRow,MessageButton, DataManager } = require("discord.js")
const data = require("../../Schema/guild")
module.exports = {
    name: "yetkili",
    aliases: ["yt","ytbaşlat"],
    about: "(ktria)",

    run: async (client, message, args) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       if(!member) return message.reply({content:`bir kullanıcı belirtin`})
       if(member.id === message.author.id) return message.reply({content:`kendinize kayıt işlemi yapamazsınız.`})
       if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply({content:`sizinle aynı/üst role sahip bir kişiye işlem yapamazsınız.`})
        const embed = new MessageEmbed().setColor("RANDOM")
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId("alt")
            .setLabel("Alt Yetki")
            .setStyle("SUCCESS"),
            new MessageButton()
            .setCustomId("orta")
            .setLabel("Orta Yetki")
            .setStyle("PRIMARY"),
            new MessageButton()
            .setCustomId("üst")
            .setLabel("Üst Yetki")
            .setStyle("SECONDARY")
        )

        
    const filter = (interaction) => interaction.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
    const panel = await message.reply({embeds:[embed.setDescription(`Selam ${message.author}, ${member} kişisini başlatmak istediğiniz yetkiyi aşşağıdaki butonlardan seçebilirsiniz.`)], components: [row], ephemeral: true} )
        
            collector.on("collect", async (interaction) => {
                if(interaction.customId === "alt") {
                    await interaction.deferUpdate()
                
                    await panel.edit({embeds:[embed.setDescription(`
${member}, kişisine ${message.author} tarafından **__Alt Yönetim__** rolleri başarıyla verildi 

Kullanıcıya verilen roller şu şekildedir; ${db.yönetim.length < 1 ? `\`(bir rol ataması henüz yapılmamış)\`` : db.yönetim.map(x => `<@&${x}>`)}

                    `)]})
                }
            })
   
   }
}

 //ayarlanacak