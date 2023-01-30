const { MessageEmbed, MessageActionRow, MessageButton, DataManager } = require("discord.js");
const data = require("../../Schema/guild");
const rdata = require("../../Schema/register");
module.exports = {
    name: "kayıt",
    aliases: ["erkek", "kadın", "e", "k"],
    about: "(ktria)",

    run: async (client, message, args) => {
        let db = await data.findOne({ guild: message.guild.id });
        if (!db.kadın && !db.erkek && !db.kayitsiz) return message.reply({ content: `.setup komutu ile kurulumu tamamlayın.` });
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply({ content: `bir kullanıcı belirtin` });
        if (!db.registerhammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("ADMINISTRATOR")) return;
        if (member.id === message.author.id) return message.reply({ content: `kendinize kayıt işlemi yapamazsınız.` });
        if (!message.member.permissions.has("MANAGE_NICKNAMES") && !member.voice.channel) return message.reply({ content: `${member} bir ses kanalında olmalıdır.` });
        if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply({ content: `sizinle aynı/üst role sahip bir kişiye işlem yapamazsınız.` });

        const embed = new MessageEmbed().setAuthor({
            name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })
        });

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("erkek")
                .setLabel("Erkek")
                .setStyle("SECONDARY")
                .setEmoji(client.emojis.cache.find(x => x.name === "ktriaerkek")),
            new MessageButton()
                .setCustomId("kadın")
                .setLabel("Kadın")
                .setStyle("SECONDARY")
                .setEmoji(client.emojis.cache.find(x => x.name === "ktriakadin")),
            new MessageButton()
                .setCustomId("iptal")
                .setLabel("İptal")
                .setStyle("DANGER")
        );
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

        const panel = await message.reply({
            embeds: [embed.setDescription(`${member} kişisinin ismi \`${newName}\` ismiyle olarak güncellendi.`)],
            components: [row],
            ephemeral: true
        });

        const collector = panel.createMessageComponentCollector({
            filter: (interaction) => interaction.user.id === message.author.id,
            time: 15000
        });

        collector.on("collect", async (interaction) => {
            collector.stop();
            if (interaction.customId === "erkek") {
                await interaction.deferUpdate()
                await member.setNickname(newName).catch(e => { });
                await panel.edit({embeds:[embed.setDescription(`**${interaction.customId}** olarak \`${newName}\` ismiyle kayıt edildi!`)], components: [row.setComponents(row.components.map(c => c.setDisabled(true)))]});
                await member.roles.remove(db.kayitsiz).catch(e => { })
                await member.roles.add(db[`${interaction.customId}`]).catch(e => { })
                await rdata.findOneAndUpdate({ guild: interaction.guild.id, user: member.id }, {
                    $set: {
                        date: Date.now(),
                        staff: message.author.id,
                        name: newName,
                        gender: interaction.customId,
                        true: true
                    }
                }, { upsert: true })

            } 
            
            
            if (interaction.customId === "kadın") {
                await interaction.deferUpdate()
                await member.setNickname(newName).catch(e => { });
                await panel.edit({embeds:[embed.setDescription(`**${interaction.customId}** olarak \`${newName}\` ismiyle kayıt edildi!`)], components: [row.setComponents(row.components.map(c => c.setDisabled(true)))]});
                await member.roles.remove(db.kayitsiz).catch(e => { })
                await member.roles.add(db[`${interaction.customId}`]).catch(e => { })
                await rdata.findOneAndUpdate({ guild: interaction.guild.id, user: member.id }, {
                    $set: {
                        date: Date.now(),
                        staff: message.author.id,
                        name: newName,
                        gender: interaction.customId,
                        true: true
                    }
                }, { upsert: true })

            }  else if (interaction.customId === "iptal") {
                await interaction.deferUpdate()
                await panel.edit({embeds:[embed.setDescription(`${member} kişisinin ismi \`${newName}\` olarak güncellendi.`)], components: [row.setComponents(row.components.map(c => c.setDisabled(true)))]});
            }
        });

    },
    kayitSay: async (guildId, staffId) => {
        /**
         * 
         * 
         */
        const top = await rdata.find({ guild: guildId, staff: staffId, gender: { $ne: null } });
        return top.map((d) => d);
        const erkeküye = top.filter(doc => doc.gender === "erkek").length;
        const kadınüye = top.filter(doc => doc.gender === "kadın").length;

        const hazirim = `Kayıt sayısı: ${erkeküye + kadınüye} \`[${erkeküye} erkek, ${kadınüye} kadın]\``
    }

}
