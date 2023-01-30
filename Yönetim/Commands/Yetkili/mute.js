const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed,SelectMenuInteraction,Collection } = require("discord.js");
const { model, Schema } = require("mongoose");
const data = require("../../Schema/guild");
const cdata = require("../../Schema/mute");
const moment = require('moment');
const set = require("../../../settings")
module.exports = {
    name: "mute",
    about: "(ktria)",
    aliases: ["chatmute", "metinmute"],
    run: async (client, message, args, embed, cekic) => {
        let db = await data.findOne({ guild: message.guild.id });
        if (!db.mutehammer.some(ktria => message.member.roles.cache.has(ktria)) && !message.member.permissions.has("BAN_MEMBERS") && !message.member.permissions.has("ADMINISTRATOR")) return;
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let guildId = client.guilds.cache.get(set.guildId)
        if (!member) return message.reply({ content: 'Bir kullanıcıyı belirtmelisin!' });
        let mins = [
            { label: "Cinsellik, taciz, küfür (10 Dakika)", value: "cinsel_10m" },
            { label: "Kurallara uyum sağlamama (10 Dakika)", value: "uyum_10m" },
            { label: "Dil, din, ırk (30 Dakika)", value: "dildin_30m" },
            { label: "Abartı rahatsız edici davranma (1 Saat)", value: "rahatsiz_1h" },
            { label: "Sunucu kötüleme (2 Saat)", value: "sunucu_2h" }
        ];

        let mute_menu = new MessageSelectMenu()
            .setPlaceholder(`${member.user.tag} kullanıcısının mute sebebi`)
            .setCustomId("mutepanel").setMaxValues(1)
            .addOptions(mins);

        const mute = new MessageActionRow().addComponents(mute_menu);
        const panel = await message.reply({ content: `${member} kişisini neden mutelemek istiyorsunuz seçiniz.`, components: [mute] });

        const collector = await panel.createMessageComponentCollector({
            componenrType: 'SELECT_MENU',
            filter: (x) => x.user.id === message.author.id,
            time: 60000
        });
        collector.on("collect", async (interaction) => {
            console.log(interaction.values);
            const sebepId = interaction.values[0].split("_")[0];
            const sure = interaction.values[0].split("_")[1];
            const data = mins.find((min) => min.value = interaction.values[0]).label.split(" _(");
            collector.stop(mins);
            const doc = await cdata.create({
                guildId: message.guild.id,
                userId: member.user.id,
                executorId: interaction.user.id,
                reason: data[0],
                edited: [],
                until: moment().add(sure).toDate()
            });
            await interaction.deferUpdate();
            await panel.react("✅");
            await panel.edit({content: data[0], components: [mute.setComponents(mute_menu.setDisabled(true))]});
            await member.roles.add(db.muted.filter((id) => message.guild.roles.cache.has(id)));
        })

        collector.on("end", async (code) => {
            if (!code) return "işlem zaman aşımına uğradı";
            await panel.edit()

        })

    },

    checkDone: (guildId) => {
            global.client.muteds.filter((doc) => global.client.guilds.cache.get(guildId).members.cache.has(doc.userId)).forEach((doc) => {
                global.client.guilds.cache.get(guildId).members.cache.get(userId).roles.remove(db.muted);
            });


    },
    refresh: (guildId) => {
        cdata.find({guildId , until: { $lt: new Date().toISOString() } }).then((docs) => {
            docs.filter((doc) => global.client.guilds.cache.get(guildId).members.cache.has(doc.userId)).forEach((doc) => {
                global.client.muteds.set(doc.userId, doc);
            });
        });
        require('./mute.js').checkDone(guildId);
    }
}
