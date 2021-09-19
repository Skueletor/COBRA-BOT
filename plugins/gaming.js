/* Codded by @sisula
*/
const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
//logo set
//
if (Config.WORKTYPE == 'public') {//work type
  
  cobra.addCommand({pattern: 'lolcover ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'warf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warface?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'avlol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/avatarlol?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'bnlol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/shinebannerlol?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'malol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/mastery7lol?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'wacover ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'fccover ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=66b62293b92c411a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}
