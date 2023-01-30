const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "pull",
    about: "(ktria)",
    aliases: [],
    run: async (client, message, args) => {
      if(message.author.id != "652956408270159872" && message.author.id != "942697809080111145") return;
      function Process() {
        var ls = require("child_process").exec(`git pull`);
        ls.stdout.on('data', function (data) {
            message.reply(`\`\`\`${data.slice(0, 1980)}...\`\`\``);
        });
        ls.stderr.on('data', function (data) {
            message.reply(`\`\`\`${data.slice(0, 1980)}...\`\`\``);
        });
        ls.on('close', function (code) {
            if (code == 0)
                console.log('Stop');
            else
                console.log('Start');
        });
        setTimeout(() => {
            ls.kill();
        }, 1000);
    }
      try {
        Process();
      } catch (err) { 
        await message.channel.send(err, { code: "js", split: true }) };
    }

}

