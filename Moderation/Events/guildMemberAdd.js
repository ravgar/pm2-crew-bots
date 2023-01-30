const set = require("../../settings")
const data = require("../Schemas/guild")
module.exports = async member => {
let db = await data.findOne({guild:member.guild.id})
const channels = client.channels.cache.get(db.welcome)
let oc = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
if(oc) {
    member.setNickname("Supheli")
    member.roles.set(db.supheli)
    await channels.send({content:`${client.emojis.cache.find(x => x.name === "ktriauyari")} ${member} kullanıcısı hesabını 7'günden önce oluşturduğu için (<t:${Math.floor(member.user.createdTimestamp / 1000)}>) şüpheli rolünü verdim.`})
} else {
    await member.roles.add(db.kayitsiz)
    await channels.send({content:`
Merhabalar ${member} [\`${member.id}\`], ${member.guild.name} sunucumuza hoş geldin. Seninle beraber **${member.guild.memberCount}** kişi olduk!

Hesabın <t:${Math.floor(member.user.createdTimestamp / 1000)}> tarihinde (<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>) oluşturulmuş.

Sunucumuza kayıt olduğunda kurallar kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu

kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız. 🎉🎉🎉
`})
}   


}