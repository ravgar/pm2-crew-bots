const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "emojikur",
    about: "(ktria)",
    aliases: ["emojikur"],
    run: async (client, message, args) => {
      if(message.author.id != "652956408270159872") return;
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1015692760394768455.gif?size=96&quality=lossless", "ktriayildiz").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1017119804739551282.gif?size=96&quality=lossless", "ktriamic").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1015692846864535654.gif?size=96&quality=lossless", "ktriadiamond").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/899265525438377985.gif?size=96&quality=lossless", "ktriaonay").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/899265526084292678.gif?size=96&quality=lossless", "ktriared").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1046829936700293142.webp?size=128&quality=lossless", "ktriauyari").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1048275600940486847.gif?size=128&quality=lossless", "ktriastaff").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1048330616577458316.webp?size=128&quality=lossless", "ktria_veri").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/890738617130037318.webp?size=56&quality=lossless","ktriadot").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1015693441780424804.gif?size=128&quality=lossless","ktriates").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1061002516717899816.gif?size=128&quality=lossless","ktriacekic").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1060596163427963020.gif?size=128&quality=lossless","ktriasimsek").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914321584443403.webp?size=128&quality=lossless","sagbosbar").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914300893925376.webp?size=128&quality=lossless","solbosbar").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914281944068116.webp?size=128&quality=lossless","bosortabar").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914561918046270.gif?size=128&quality=lossless","ortabar").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914535565238302.gif?size=128&quality=lossless","solbar").catch(e => {})
      await message.guild.emojis.create("https://cdn.discordapp.com/emojis/1064914578577834065.gif?size=128&quality=lossless","sagbar").catch(e => {})
      await message.reply({content:`31`})

    }

}

