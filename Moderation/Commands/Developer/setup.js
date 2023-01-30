const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, IntegrationApplication, Message, DataResolver  } = require("discord.js");
const client = global.client;
const data = require("../../Schemas/guild")

module.exports = {
    name: "kur",
    about: "Sunucu kurulumunu tamamla.",
    aliases: ["setup","kurulum","ktria-setup"],
    run: async (client, message, args, embed, onay, red, cekic) => {
        if(message.author.id != "652956408270159872" && message.author.id != "967706443044233216") return message.react("❌");
    
        
        const arg = args[0]
        const db = await data.findOne({guild:message.guild.id})

        let top = 13;

        if(["sw", "guild", "guildID", "guildId"].some(x => x == arg)) {
            await data.findOneAndUpdate({ guild:message.guild.id }, { $set:{ guild:message.guild.id } }, { upsert:true })
            await message.react(cekic)
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})
        }

        if(["tag"].some(x => x == arg)) {
            if(!args[1]) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $set:{ tag:args[1]} }, { upsert:true })
            await message.react(cekic)
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})
        }


        if(["erkek", "man"].some(x => x == arg)) {
            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
            if(!rol) return message.react(red)    
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{erkek:rol.id} }, {upsert:true})
            await message.react(cekic)          
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})  
        }
        if(["reg","registerhammer"].some(x => x == arg)) {
            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
            if(!rol) return message.react(red)    
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{registerhammer:rol.id} }, {upsert:true})
            await message.react(cekic)          
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})  
        }
        if(["kadın", "woman"].some(x => x == arg)) {
            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{kadın:rol.id} }, {upsert:true})
            await message.react(cekic)    
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})     
        }

        if(["unreg","kayıtsız"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{kayitsiz:rol.id} }, {upsert:true})
            await message.react(cekic)    
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})        
        }
        
        if(["vip","special"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{vip:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})      
        }

        if(["booster"].some(x => x == arg)) { 
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{booster:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})      
        }

        if(["crew"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{crew:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})      
        }
        if(["muted"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{muted:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})      
        }

        if(["yönetim"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{yönetim:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})      
        }

        if(["supheli"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{supheli:rol.id} }, {upsert:true})
            await message.react(cekic)      
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})     
        }

        if(["cezali"].some(x => x == arg)) {
            const rol = message.mentions.roles.first();
            if(!rol) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $push:{cezali:rol.id} }, {upsert:true})
            await message.react(cekic)       
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})     
        }


        if(["chat"].some(x => x == arg)) {
            const kanal = message.mentions.channels.first()
            if(!kanal) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $set:{chat:kanal.id} }, {upsert:true})
            await message.react(cekic)
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})
        }
        if(["welcome"].some(x => x == arg)) {
            const kanal = message.mentions.channels.first()
            if(!kanal) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $set:{welcome:kanal.id} }, {upsert:true})
            await message.react(cekic)
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})
        }
        if(["rules"].some(x => x == arg)) {
            const kanal = message.mentions.channels.first()
            if(!kanal) return message.react(red)
            await data.findOneAndUpdate({ guild:message.guild.id }, { $set:{rules:kanal.id} }, {upsert:true})
            await message.react(cekic)
            await data.findOneAndUpdate({guild:message.guild.id}, {$inc: {setup:1}}, {upsert:true})
        }
     
        if(!arg) {
    
            message.channel.send({embeds:[embed.setDescription(`
            Sunucu Idsi: ${!db.guild ? `\`(AYARLANMAMIŞ)\``:`${db.guild}`}
            Sunucu Tagı: ${!db.tag ? `\`(AYARLANMAMIŞ)\``:`${db.tag}`}
            Sunucu İkincil Tagı: ${!db.untag ? `\`(AYARLANMAMIŞ)\``:`${db.untag}`}
            Erkek Rolleri: ${db.erkek.length < 1 ? `\`(AYARLANMAMIŞ)\``:db.erkek.map(x => `<@&${x}>`).join(", ")}
            Kadın Rolleri: ${db.kadın.length < 1 ? `\`(AYARLANMAMIŞ)\``:db.kadın.map(x => `<@&${x}>`).join(", ")}
            Kayıtsız Rolleri: ${db.kayitsiz.length < 1 ? `\`(AYARLANMAMIŞ)\``:db.kayitsiz.map(x => `<@&${x}>`).join(", ")}
            Booster Rolleri: ${db.booster.length < 1 ? `\`(AYARLANMAMIŞ)\``:db.booster.map(x => `<@&${x}>`).join(", ")}
            Taglı Rolleri: ${db.crew.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.crew.map(x => `<@&${x}>`)}
            Yönetim Rolleri: ${db.yönetim.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.yönetim.map(x => `<@&${x}>`)}
            Vip Rolleri: ${db.vip.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.vip.map(x => `<@&${x}>`)}
            Şüpheli Rolleri: ${db.supheli.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.supheli.map(x => `<@&${x}>`)}
            Register Rolleri: ${db.supheli.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.supheli.map(x => `<@&${x}>`)}

            Cezalı Rolleri: ${db.cezali.length < 1 ? `\`(AYARLANMAMIŞ)\`` : db.cezali.map(x => `<@&${x}>`)}
            MuteRol: ${!db.muterol ? `\`(AYARLANMAMIŞ)\``:`<@&${db.muterol}>`}
            Owner: ${db.owner.length < 1 ? `\`(AYARLANMAMIŞ)\``:db.owner.map(x => `<@&${x}>`).join(", ")}
            
            Chat Kanalı: ${!db.chat ? `\`(AYARLANMAMIŞ)\``:`<#${db.chat}>`}
            Kural Kanalı: ${!db.rules ? `\`(AYARLANMAMIŞ)\``:`<#${db.rules}>`}



            
            
`)]})

                }
                  
                }

        }
            

