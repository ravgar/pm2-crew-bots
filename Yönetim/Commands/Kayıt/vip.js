const data = require("../../Schema/guild");
const moment = require("moment")
moment.locale("tr");
module.exports = {
    name: "vip",
    about: "Kullanıcı belirt.",
    aliases: ["vip","vip"],
  
    run: async (client, message, args,embed) => {
      let db = await data.findOne({ guild:message.guild.id })
    if (!db.owner.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;
    if(!db.vip) return message.reply({content: "Vip rolü ayarlanmamış."})
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply({content:`bir kullanıcı belirtin.`}).then(x => {setTimeout(() => {x.delete()}, 5000);})
    if(member.id === message.author.id) return message.reply({content: "Kendinize işlem yapmazsınız."})
if(!member.roles.cache.has(db.vip)) {
  await member.roles.add(db.vip)
  message.reply({embeds: [embed.setDescription(`${member} kullanıcısına <@&${db.vip}> rol(leri) verildi.`)]}).then(x => {setTimeout(() => {x.delete()}, 5000);})

} else {
  await member.roles.remove(db.vip)
  message.reply({embeds: [embed.setDescription(`${member} kullanıcısına <@&${db.vip}> rol(leri) alındı.`)]}).then(x => {setTimeout(() => {x.delete()}, 5000);})

}
  }
}