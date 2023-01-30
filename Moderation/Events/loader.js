const Events = (event) => require(`../Events/${event}`);
module.exports = (client) => {
  client.on("guildMemberAdd", Events("guildMemberAdd"));
  client.on("messageCreate", Events("command"));
  client.on("ready", Events("ready"));
  client.on("interactionCreate", Events("interactionCreate"));
  client.on("voiceStateUpdate", Events("voiceStateUpdate"));
  //client.on("messageDelete", Events("messageDelete"));
  client.on("messageUpdate", Events("messageUpdate"));
  client.on("userUpdate", Events("userUpdate"));
  //client.on("messageCreate", Events("afk"))
};
