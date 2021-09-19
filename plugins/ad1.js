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

 

     Asena.addCommand({pattern: '9558 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/glitch?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

        Asena.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'xmas ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/xmas?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'beach ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'graved ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sand-engraved?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'glue ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/glue?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

   Asena.addCommand({pattern: 'metald ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/metal-dark?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'galaxyneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

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

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'lightneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sand-writing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'lava ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/lava?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/phub?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'tsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sky?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sumsand ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'minion ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/minion?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/marvel?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'studiomarvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/marvel2?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/blackpink?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}
else if (Config.WORKTYPE == 'public') {



          Asena.addCommand({pattern: '9558 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/glitch?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

        Asena.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${topText}&text2=${bottomText}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

     Asena.addCommand({pattern: 'xmas ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/xmas?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'beach ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
    
    Asena.addCommand({pattern: 'graved ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sand-engraved?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'glue ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/glue?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

   Asena.addCommand({pattern: 'metald ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/metal-dark?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'galaxyneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

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

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'lightneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sand-writing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'lava ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/lava?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/phub?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'tsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/sky?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'sumsand ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${ceb5ace3}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'minion ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/minion?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/marvel?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'studiomarvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var ceb5ace3 = Config.XTEAM_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/marvel2?text1=${topText}&text2=${bottomText}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var ceb5ace3 = Config.XTEAM_API;
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/blackpink?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}*/
