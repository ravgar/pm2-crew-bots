const axios = require("axios");
const fetch = require("node-fetch")
const { MessageActionRow, MessageButton  } = require("discord.js");

module.exports = {
    name:'banner',
    about: 'Kullanıcının bannerini göster',
    aliases: ["bn"],
    run:  async (client, message, args, guild, embed, onay, red, cekic) => {
 var user = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
    if(!user) return message.channel.send({ content: "Geçerli bir kullanıcı belirt!"})       
          axios({
        method: 'GET',
        url: `https://discord.com/api/v8/users/${user.id}`,
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })

        .then(function (response) {
            try {
                if (response.data.banner.includes(".null")) return message.channel.send({ content: `Kullanıcının banner verisini çekemedim.`})
                message.channel.send({ content: `https://cdn.discordapp.com/banners/${response.data.id}/${response.data.banner}?size=512&quot`})
          } catch (err) {
                message.channel.send({ content: `Kullanıcının banner verisini çekemedim.`})
            }
        })
        
        
        },
  };
