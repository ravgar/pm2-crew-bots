const db = require('../Schemas/msgUpdate')

module.exports = async (oldMsg, newMsg) => {
    if(oldMsg.author.bot);

    let entry = await newMsg.guild.fetchAuditLogs({type: 'MESSAGE_UPDATE'}).then(x => x.entries.first())
    let yasaklı = ['discord.gg','.gg/','https://','http://'];
    if(yasaklı.some(x => newMsg.content.toLowerCase().includes(x))) {
        newMsg.delete();

        await db.create({
            guildId: newMsg.guild.id,
            channelId: newMsg.channel.id,
            userId: newMsg.id,
            oldMessage: oldMsg.content,
            newMessage: newMsg.content,
            date: Date.now()
        });
    }

} 

//piku yapamamıssın amk