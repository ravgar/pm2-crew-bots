const { MessageEmbed,MessageActionRow,MessageButton, DataManager } = require("discord.js")
const data = require("../../Schema/guild")
const regdata = require("../../Schema/register")
module.exports = {
    name: "isim",
    aliases: ["name","nick","i"],
    about: "(ktria)",

    run: async (client, message, args, cekic) => {
       let db = await data.findOne({guild:message.guild.id})
       if(!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;       if(!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({content:`.setup komutu ile kurulumu tamamlayın.`})
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       if(!member) return message.reply({content:`bir kullanıcı belirtin`})
       const embed = new MessageEmbed().setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })})
       if(member.id === message.author.id) return message.reply({content:`kendinize kayıt işlemi yapamazsınız.`})
       if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply({content:`sizinle aynı/üst role sahip bir kişiye işlem yapamazsınız.`})
           
       let newName = member.displayName;
       if (args[1]) {
           let name = args.filter(a => isNaN(a)).map(a => a.charAt(0).replace("i", "İ").toUpperCase() + a.slice(1)).join(" ");
           let age = args.pop();
           if (!message.member.permissions.has("MANAGE_ROLES") && !name) return message.channel.send({ content: `Bir isim belirtmelisiniz.` }).then(x => x.delete({ timeout: 5000 }));
           if (!isNaN(args.pop()) && !message.member.permissions.has("MANAGE_ROLES")) return message.reply({
               content: "Bir yaş belirtmelisiniz"
           });
           newName = ` ${name} | ${age}`;
       }
           await member.setNickname(newName).catch(e => {})
           await regdata.findOneAndUpdate({guild:message.guild.id, user: member.id}, {$set: {name: newName, date2: Date.now(), staff: message.author.id}}, {upsert: true})
           await message.react(cekic)
           await message.reply({embeds:[
            embed.setDescription(`${member} kullanıcısının ismi başarıyla \` ${newName} \` olarak değiştirildi.`)
           ]})
   
   }
}

