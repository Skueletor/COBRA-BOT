/* Codded by @sisula

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {
   Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'zwolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var sf0bomgn = Config.ZEKS_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=${sf0bomgn}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'zglow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'clight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'wfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
}

if (Config.WORKTYPE == 'public') {
   
      Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'zwolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  var sf0bomgn = Config.ZEKS_API;
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=${sf0bomgn}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'zglow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
      Asena.addCommand({pattern: 'clight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
   
   Asena.addCommand({pattern: 'wfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var sf0bomgn = Config.ZEKS_API;
    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=${sf0bomgn}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG})

    }));
}
*/
