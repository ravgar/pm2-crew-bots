const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed,ChannelTypes  } = require("discord.js");
const children = require("child_process");
module.exports = {
    name: "pm2",
    about: "(ktria)",
    aliases: [],
    run: async (client, message, args) => {
      if(message.author.id != "652956408270159872" && message.author.id != "942697809080111145") return;
      
      if (args[0] === 'logs') {
        return;
      }
      const ls = children.exec(`pm2 ${args.join(' ')}`);
      ls.stdout.on('data', function (data) {
          if (data) message.reply(`\`\`\`${data.slice(0, 1980)}...\`\`\``);
      });
      ls.stderr.on('data', function (data) {
          if (data) message.reply(`\`\`\`${data.slice(0, 1980)}...\`\`\``);
      });
    }

}

