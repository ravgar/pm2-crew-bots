const client = global.client;
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Collection } = require("discord.js");
const config = require("../../settings")
client.slashcommands = new Collection();
const fs = require("fs");
var slashcommands = [];

module.exports = async (interaction) => {
  fs.readdirSync("./slash").forEach((file) => {
    const command = require(`./slash/${file}`);
    client.slashcommands.set(command.data.name, command);
    slashcommands.push(command.data.toJSON());
  });

  const rest = new REST({ version: "9" }).setToken(config.modtoken);
  (async () => {
    try {
      console.log("Slash Komutlar yükleniyor.");
      await rest.put(
        Routes.applicationGuildCommands(config.botID, config.guildId),
        { body: slashcommands }
      );
      console.log("Slash Komutlar yüklendi.");
    } catch (error) {
      console.error(error);
    }
  })();

  client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.slashcommands.get(interaction.commandName);
    if (!command) return;
    try {
      command.execute(interaction, client);
    } catch (err) {
      if (err) console.error("Error: ", err);
    }
  });
};
