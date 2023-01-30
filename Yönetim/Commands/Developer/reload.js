const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "reload",
    about: "Botu yeniden başlat.",
    aliases: ["rl","restart"],
    run: async (client, message, args) => {
        if(message.author.id != "652956408270159872") return;
        await message.reply({content:`bot yeniden başlatılıyor.`})
        console.log(`${message.author.tag} --> [YENİDEN BAŞLATMA]`)
        process.exit(0);
        }
        
}
