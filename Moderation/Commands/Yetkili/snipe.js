const {
  Discord,
  createMessageComponentCollector,
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed,
} = require("discord.js");
const data = require("../../Schemas/snipe");

module.exports = {
  name: "snipe",
  about: "(piku)",
  aliases: ["sn"],
  run: async (client, message, args, guild, embed, onay, red, cekic) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({ content: "Gerekli yetkileri karşılamıyorsun!" });

    const db = await data.findOne({
      guildId: message.guild.id,
      channelId: message.channel.id,
    }); 
    if (!db.msgContent)return message.reply({ content: "Son silinen mesaj bu kanal için bulunamadı!" });
    message.reply({
      embeds: [
        embed.setDescription(`<#${message.channel.id}> kanalında en son silinen mesaj <@${db.userId}> adlı kullanıcıya ait mesaj bilgileri şu şekilde;

            Silinen mesaj: ${db.msgContent}
            Yazılma Tarihi: <t:${Math.floor(db.crtDate / 1000)}:R>
            Silinme Tarihi: <t:${Math.floor(db.dltDate / 1000)}:R>`),
      ],
    });
    message.react(cekic);
  },
};
