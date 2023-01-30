const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");
module.exports = {
    name: "kilit",
    about: "(ktria)",
    aliases: ["kilitle","kilitt"],
    
    run: async (client, message, args, embed) => {    
        if(!message.permissions.has("ADMINISTRATOR")) return;

        let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
        let dot = client.emojis.cache.find(x => x.name === "ktriadot");
        let staff = client.emojis.cache.find(x => x.name === "ktriastaff");

        if (message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) {
          await message.channel.permissionOverwrites.edit(everyone.id, { SEND_MESSAGES: false });
          await message.channel.send({ embeds: [embed.setDescription(`${staff} Kilitleyen Yetkili: ${message.author}\n${dot} Kilitlenen Kanal: <#${message.channel.id}>\n${dot}Kilitleme ZamanÄ±: <t:${Math.floor(Date.now() / 1000)}>`)] })
          message.react("ğŸ”’")
        } else {
          await message.channel.permissionOverwrites.edit(everyone.id, { SEND_MESSAGES: null });
          await message.channel.send({ embeds: [embed.setDescription(`${staff} Kiliti AÃ§an Yetkili: ${message.author}\n${dot} Kilit AÃ§Ä±lan Kanal: <#${message.channel.id}>\n${dot}Kilit AÃ§ma ZamanÄ±: <t:${Math.floor(Date.now() / 1000)}>`)] });
          message.react("ğŸ”“")
        };
      }
    }
    

