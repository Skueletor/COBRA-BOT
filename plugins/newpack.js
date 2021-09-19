/*coded by sisula welgamage
special thanks @hadi-api 
unlimited text maker api
*/

const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

if (Config.WORKTYPE == 'private') { 

 cobra.addCommand({pattern: 'gstyle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxystyle?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
 cobra.addCommand({pattern: 'smetalic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/starmetalic?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

     }));
  
cobra.addCommand({pattern: 'swater3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/water3d?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));

  
cobra.addCommand({pattern: 'cutpaper ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/papercut?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lshadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/loveshadow?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'gedge ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxyedge?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
   cobra.addCommand({pattern: 'anglewing ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/angelwing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fwing ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firewing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lgream ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/lightgerm?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'yasuo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/yasuo?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lstage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/bluelight?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'vgalaxy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/writegalaxy?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fdragon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firedragon?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'viettel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/viettel?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));  
}
if (Config.WORKTYPE == 'public') { 

 cobra.addCommand({pattern: 'gstyle ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxystyle?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
 cobra.addCommand({pattern: 'smetalic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/starmetalic?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

     }));
  
cobra.addCommand({pattern: 'swater3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/water3d?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));

  
cobra.addCommand({pattern: 'cutpaper ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/papercut?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lshadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/loveshadow?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'gedge ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxyedge?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
   cobra.addCommand({pattern: 'anglewing ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/angelwing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fwing ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firewing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lgream ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/lightgerm?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'yasuo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/yasuo?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lstage ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/bluelight?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'vgalaxy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/writegalaxy?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fdragon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firedragon?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'viettel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/viettel?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));  
}
if (Config.WORKTYPE == 'public') { 

 cobra.addCommand({pattern: 'gstyle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxystyle?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
 cobra.addCommand({pattern: 'smetalic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/starmetalic?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

     }));
  
cobra.addCommand({pattern: 'swater3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/water3d?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));

  
cobra.addCommand({pattern: 'cutpaper ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/papercut?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lshadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/loveshadow?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'gedge ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/galaxyedge?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
   cobra.addCommand({pattern: 'anglewing ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/angelwing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fwing ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firewing?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lgream ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/lightgerm?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'yasuo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/yasuo?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'lstage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/bluelight?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'vgalaxy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/writegalaxy?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'fdragon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/firedragon?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));
  
  cobra.addCommand({pattern: 'viettel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/ephoto/viettel?text=${match[1]}&apikey=h4ck3rs404`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_MSG})

    }));  
}
