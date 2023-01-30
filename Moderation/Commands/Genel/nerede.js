const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "nerede",
    about: "(ktria)",
    aliases: ["n","nerede","neredebu","neredesin"],
    run: async (client, message, args, guild, onay, red, cekic) => {
        if(!message.member.permissions.has('MANAGE_CHANNELS') && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: 'Gerekli yetkiler üstünde bulunmuyor!' })
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const embed = new MessageEmbed().setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setColor("RANDOM") 
        if(!member) return message.reply({embeds:[embed.setDescription(`Bir kullanıcı belirtmeniz gerekmektedir.`)]})
        if(!member.voice.channel) return message.reply({ content:`Etiketlediğin kullanıcıyı ses kanallarında göremiyorum!` })
        const channel = member.voice.channel
    
    
        message.reply({embeds:[embed.setDescription(`${member} adlı kullanıcı <#${member.voice.channel.id}> kanalında!

        \` - \` Mikrofon  (\`${member.voice.selfMute ? "Kapalı" : "Açık"}\`)
        \` - \` Kulaklık (\`${member.voice.selfDeaf ? "Kapalı" : "Açık"}\`)

        Ses kanalında toplam \` ${member.voice.channel.members.size} \` üye bulunmakta!
        
        \`\`\`yaml
Ses kanalındaki üyeler\`\`\`
        ${channel.members.map(x => `\`${x.displayName}\` [${client.users.cache.get(x.id).tag}]`) == 0 ? "Üye Yoktur" : channel.members.map(x => `\`${x.displayName}\` [${client.users.cache.get(x.id).tag}]`).join("\n")}`)]})
        message.react(cekic)
    }
}