const Events = (event) => require(`./${event}`);
module.exports = (client) => {

    client.on("messageCreate", Events("command"));
    client.on("ready", Events("ready"));
    //client.on("guildBanAdd", Events("guildBanAdd"));
};