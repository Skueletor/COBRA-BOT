/* Codded by @sisula


const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
   var ceb5ace3 = Config.XTEAM_API;
   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pabjigaqi?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

        Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var ceb5ace3 = Config.XTEAM_API;
   var webimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'battlefield ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
         
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/battlefield?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoke?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'wolfmetal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'pentakill ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'gavatar ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

   Asena.addCommand({pattern: 'woodblock ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/woodblock?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'joker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'coverow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'lolavatar ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolavatarglitch?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'csgo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/csgo?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'coverlol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'pornhug ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'gerband ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'underweb ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'tryposmoke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/8bit?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

       Asena.addCommand({pattern: 'warface ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'firecross ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crossfire?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'znija ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ninjalogo?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}
else if (Config.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pabjigaqi?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

        Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'battlefield ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
 var ceb5ace3 = Config.XTEAM_API; 
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/battlefield?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoke?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'wolfmetal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'pentakill ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'gavatar ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

   Asena.addCommand({pattern: 'woodblock ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/woodblock?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'joker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'coverow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'lolavatar ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolavatarglitch?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'csgo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
     var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/csgo?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'coverlol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'pornhug ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'gerband ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'underweb ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'tryposmoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/8bit?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

       Asena.addCommand({pattern: 'warface ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'firecross ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crossfire?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'znija ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ninjalogo?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}*/
