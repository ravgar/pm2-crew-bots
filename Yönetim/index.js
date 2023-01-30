const {Client, Collection} = require("discord.js")
const {mongoose} = require("mongoose")
const {readdirSync} = require("fs")
const client = global.client = new Client({
    ws: {
        properties: {
            browser: "Discord Android",
        }
    },
    fetchAllMembers: true, intents: 32767
});
const config = require("../settings")
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
mongoose.connect(config.mongoose, { useNewUrlParser: true, useUnifiedTopology: true })

require('./Events/loader.js')(client);
const files = readdirSync('./Commands/', {encoding: 'utf8'})
files.filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./Commands/${files}`);
    if(!command) return console.log("ff")
    if (!command.name) return console.log(`Hatalı Komut: [/Commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
});
files.filter((file) => !file.endsWith('.js')).forEach((folder) => {
    try {
        readdirSync(`./Commands/${folder}/`, {encoding: 'utf8'}).filter(file => file.endsWith(".js")).forEach((files) => {
            let command = require(`./Commands/${folder}/${files}`);
            if(!command) return console.log("ff")
            if (!command.name) return console.log(`Hatalı Komut: [/Commands/${folder}/${files}]`)
            commands.set(command.name, command);
            if (!command.aliases || command.aliases.length < 1) return
            command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
        });
    } catch (error) {
        console.log(`${folder} isimli zartzort hata var bilader`)
    }
})

client.login(config.yönetim).then(function(x) {console.log(`${client.user.tag}`)}).catch(function(err){console.log(err)})

process.on("uncaughtException", err => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.error("hata: ", errorMsg);
    process.exit(1);
  });
  process.on("unhandledRejection", err => {
    console.error(err);
  });
  