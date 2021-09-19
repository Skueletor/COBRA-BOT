const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'gpack', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[1] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[2] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[3] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[4] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[5] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━Gaming Logo Pack━━━━━*
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lolcover
🔹𝙐𝙨𝙚➜ (.lolcover cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warf  
🔹𝙐𝙨𝙚➜ (.warf  cobra) 

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .avlol  
🔹𝙐𝙨𝙚➜ (.avlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .bnlol  
🔹𝙐𝙨𝙚➜ (.bnlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .malol 
🔹𝙐𝙨𝙚➜ (.malol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .wacover 
🔹𝙐𝙨𝙚➜ (.wacover  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fccover 
🔹𝙐𝙨𝙚➜ (.fccover  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .pubg 
🔹𝙐𝙨𝙚➜ (.woodblock cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .battlefield 
🔹𝙐𝙨𝙚➜ (.battlefield  cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .pentakill 
🔹𝙐𝙨𝙚➜ (.pentakill  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar 
🔹𝙐𝙨𝙚➜ (.gavatar  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverow 
🔹𝙐𝙨𝙚➜  (.coverow  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .csgo 
🔹𝙐𝙨𝙚➜ (.csgo  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol 
🔹𝙐𝙨𝙚➜ (.coverlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface  
🔹𝙐𝙨𝙚➜ (.warface  cobra)
*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'gpack', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[1] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[2] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[3] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[4] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    r_text[5] = "https://telegra.ph/file/b10a3d8af1ec702b16e29.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━Gaming Logo Pack━━━━━*
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lolcover
🔹𝙐𝙨𝙚➜ (.lolcover cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warf  
🔹𝙐𝙨𝙚➜ (.warf  cobra) 

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .avlol  
🔹𝙐𝙨𝙚➜ (.avlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .bnlol  
🔹𝙐𝙨𝙚➜ (.bnlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .malol 
🔹𝙐𝙨𝙚➜ (.malol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .wacover 
🔹𝙐𝙨𝙚➜ (.wacover  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fccover 
🔹𝙐𝙨𝙚➜ (.fccover  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .pubg 
🔹𝙐𝙨𝙚➜ (.woodblock cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .battlefield 
🔹𝙐𝙨𝙚➜ (.battlefield  cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .pentakill 
🔹𝙐𝙨𝙚➜ (.pentakill  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar 
🔹𝙐𝙨𝙚➜ (.gavatar  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverow 
🔹𝙐𝙨𝙚➜  (.coverow  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .csgo 
🔹𝙐𝙨𝙚➜ (.csgo  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol 
🔹𝙐𝙨𝙚➜ (.coverlol  cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface  
🔹𝙐𝙨𝙚➜ (.warface  cobra)
*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
