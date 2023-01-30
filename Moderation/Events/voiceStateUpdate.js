
const { MessageEmbed } = require('discord.js');
const vdata = require("../Schemas/voice")
const set = require("../../settings")
module.exports = async (old, nev) => {
    await vdata.create({
        channelId: nev.channelId,
        userId: nev.member.user.id,
        self_mute: nev.selfMute,
        self_deaf: nev.selfDeaf,
        server_mute: nev.serverMute,
        server_deaf: nev.serverDeaf,
        streaming: nev.streaming,
        webcam: nev.selfVideo
    }); 
    const member = old.guild.members.cache.get(old.id);
        
        if(!member) return;
        
            if(member.user.bot) return;

            const bot = client.users.cache.get(set.botID)
            let log = old.guild.channels.cache.find(x => x.name === "voice_log")
       //**Kullanıcı :** \`${member.user.tag}\` - (\`${member.id}\`) ${newState.channel} kanalına giriş yaptı 
            if (member.user.bot) return;
            if (!old.channel && nev.channel) return log.send({embeds:[new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor({name:member.user.tag, iconURL: member.displayAvatarURL()})
                .setDescription(`**${member.user.tag}**, ${nev.channel} kanalına katıldı`)
                .addFields([
                    {name: `Kanal`, value:`${nev.channel} - (${nev.channel.name})`, inline: false},
                    {name: "ID", value: `\`\`\`yaml
Kullanıcı = ${member.id}
Kanal = ${nev.channel.id}\`\`\``, inline:false}
                ])
                .setFooter({text: bot.username ,iconURL: bot.displayAvatarURL()})
                .setTimestamp()
            ]});
        //**Kullanıcı :** \`${member.user.tag}\` - (\`${member.id}\`) ${oldState.channel} kanalından çıkış yaptı
            if (old.channel && !nev.channel) return log.send({embeds:[new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor({name:member.user.tag, iconURL: member.displayAvatarURL()})
                .setDescription(`**${member.user.tag}**, ${old.channel} kanalından çıkış yaptı`)
                .addFields([
                    {name: `Kanal`, value: `${old.channel} - (${old.channel.name})`, inline: false},
                    {name: "ID", value: `\`\`\`yaml
Kullanıcı = ${member.id}
Kanal = ${old.channel.id}\`\`\``, inline:false}
                ])
                .setFooter({text: bot.username ,iconURL: bot.displayAvatarURL()})
                .setTimestamp()

            ]});

            if(!old.streaming && nev.streaming) return log.send({embeds:[new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({name: member.user.tag, iconURL: member.displayAvatarURL()})
            .setDescription(`**${member.user.tag}**, ${nev.channel} kanalında yayın başlattı`)
            .addFields([
                {name: "Kanal", value: `${nev.channel} (${nev.channel.name})`, inline:false},
                {name: "ID", value:`\`\`\`yaml
Kullanıcı = ${member.id}
Kanal = ${nev.channel.id}\`\`\`` , inline:false}
            ])
        ]});

        if(!old.streaming && nev.streaming) return log.send({embeds:[new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({name: member.user.tag, iconURL: member.displayAvatarURL()})
            .setDescription(`**${member.user.tag}**, ${nev.channel} kanalında yayın başlattı`)
            .addFields([
                {name: "Kanal", value: `${nev.channel} (${nev.channel.name})`, inline:false},
                {name: "ID", value:`\`\`\`yaml
Kullanıcı = ${member.id}
Kanal = ${nev.channel.id}\`\`\`` , inline:false}
            ])
        ]});
    
        if(old.streaming && !nev.streaming) return log.send({embeds:[new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({name: member.user.tag, iconURL: member.displayAvatarURL()})
            .setDescription(`**${member.user.tag}**, ${old.channel} kanalında yayın durdurdu`)
            .addFields([
                {name: "Kanal", value: `${old.channel} (${old.channel.name})`, inline:false},
                {name: "ID", value:`\`\`\`yaml
Kullanıcı = ${member.id}
Kanal = ${old.channel.id}\`\`\`` , inline:false}
            ])
        ]});




//bunun verilerini kendiniz ayarlayın bi zahmet amk 
// yeni schema açın
//await schemaname.findOneAndUpdate({})
    }