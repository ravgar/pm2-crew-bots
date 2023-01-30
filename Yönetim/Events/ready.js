

const { Collection } = require("discord.js");

const set = require("../../settings")

const { joinVoiceChannel } = require("@discordjs/voice");
module.exports = async client => {
  client.muteds = new Collection()
    setInterval(async () => {
    const bio = set.bio
    const random = Math.floor(Math.random() * (bio.length))
    client.user.setActivity({name: bio[random]})
    const VoiceChannel = client.channels.cache.get(set.ses);
    joinVoiceChannel({
      channelId: VoiceChannel.id,
      guildId: VoiceChannel.guild.id,
      adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
      selfDeaf: true,// 
      selfMute: true // 
    });
    require('../Commands/Yetkili/mute').refresh(set.guild);
    
    }, 10000)
   
}



    