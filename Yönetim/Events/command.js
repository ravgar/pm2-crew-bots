
const { MessageEmbed, Collection } = require('discord.js');
const moment = require('moment');
require('moment-duration-format')
const set = require("../../settings")
const { model,Schema } = require("mongoose")
    const data = require("../Schema/guild")
module.exports = async message => {

  if (!message.guild || message.author.bot || !message.content.startsWith(set.prefix)) return;
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const embed = new MessageEmbed().setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setColor("RANDOM")
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
  const veri = await data.findOne({guild:message.guild.id}) 
  const onay = `${client.emojis.cache.find(x => x.name = "ktriaonay")}`
  const cekic = `${client.emojis.cache.find(x => x.name === "ktriacekic")}`
  if (!cmd) return;
  cmd.run(client, message, args, embed, veri);

}


    