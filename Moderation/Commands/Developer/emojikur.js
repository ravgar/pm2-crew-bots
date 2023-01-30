const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "ekur",
    about: "Emoji kur.",

    aliases: ["emojikur","emoji"],
    run: async (client, message, args) => {
      if(message.author.id != "652956408270159872") return;
      if(!args[0]) return message.reply({content:`Yüklenecek emoji ismi ve linkini belirt. \`.emoji <isim> <url>\``})
      if(!args[1]) return message.reply({content:`Emoji URL'sini belirt.`})
      await message.guild.emojis.create(args[1], args[0]).then(() => message.react(`${client.emojis.cache.find(x => x.name === "ktriaonay")}`)).catch(() => message.reply({content:`Emojiyi yüklerken bir sorun meydana geldi. URL bozuk veya yetkim bulunmuyor.`}))
    }

    }

