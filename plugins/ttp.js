/* Codded by @phaticusthiccy
recoded by sisula welgamage
*/

const cobra = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
let wk = Config.WORKTYPE == 'public' ? false : true
const cobranpm = require('cobrabot')
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('ttp');

var description = ''
var cmd = ''
var cmd_desc = ''
if (Config.LANG == 'SI') description = 'Shows all ttp commands.', cmd = '*Command:* ', cmd_desc = '*Description:* '
if (Config.LANG == 'EN') description = 'Shows all ttp commands.', cmd = '*Command:* ', cmd_desc = '*Description:* '

cobra.addCommand({ pattern: 'allttp$', fromMe: wk, desc: description }, (async (message, match) => {
  var t1 = Lang.TTP_DESC
  var t2 = Lang.ATTP_DESC
  var t3 = Config.LANG == 'SI' ? "පෙළ ජල තේමාවන් සහිත ස්ටිකරයට පරිවර්තනය කරයි." : "Converts text to water-themed sticker."
  var t4 = Config.LANG == 'SI' ? "පෙළ අතින් ලියන ස්ටිකරයට පරිවර්තනය කරයි." : "Converts text to hand writing sticker."
  var t5 = Config.LANG == 'SI' ? "පෙළ blackbird තේමාවට ඇලවූ ස්ටිකරය බවට පරිවර්තනය කරයි." : "Converts text to blackbird-themed sticker."
  var t6 = Config.LANG == 'SI' ? "පෙළ Gum තේමාවක් සහිත ස්ටිකරයක් බවට පරිවර්තනය කරයි." : "Converts text to gum-themed sticker."
  var t7 = Config.LANG == 'SI' ? "පෙළ smurfs තේමාවෙන් යුත් ස්ටිකරයට පරිවර්තනය කරයි." : "Converts text to smurfs-themed sticker."
  var t8 = Config.LANG == 'SI' ? "පෙළ electric තේමාවෙන් යුත් ස්ටිකරයට පරිවර්තනය කරයි." : "Converts text to electric-themed sticker."
  var t9 = Config.LANG == 'SI' ? "පෙළ highlighted කළ සජීවිකරණ ස්ටිකරයට පරිවර්තනය කරයි." : "Converts text to highlighted animated sticker."
  var t10 = Config.LANG == 'SI' ? "පෙළ සජීවිකරණ ස්ටිකරය වෙත මාරු කරයි." : "Converts text to transition animated sticker."
  
  var payload ='🐍 ＴＴＰ ＬＩＳＴ🐍' + '\n\n' +
    '🌈' + cmd + '.ttp' + '\n' + cmd_desc + t1 + '\n\n' +
    '🌈' + cmd + '.attp' + '\n' + cmd_desc + t2 + '\n\n' +
    '🌈' + cmd + '.wttp' + '\n' + cmd_desc + t3 + '\n\n' +
    '🌈' + cmd + '.http' + '\n' + cmd_desc + t4 + '\n\n' +
    '🌈' + cmd + '.ahttp' + '\n' + cmd_desc + t9 + '\n\n' +
    '🌈' + cmd + '.bttp' + '\n' + cmd_desc + t5 + '\n\n' +
    '🌈' + cmd + '.gttp' + '\n' + cmd_desc + t6 + '\n\n' +
    '🌈' + cmd + '.sttp' + '\n' + cmd_desc + t7 + '\n\n' +
    '🌈' + cmd + '.ettp' + '\n' + cmd_desc + t8 + '\n\n' +
    '🌈' + cmd + '.pttp' + '\n' + cmd_desc + t10
    
  await message.client.sendMessage(message.jid,payload, MessageType.text)
}));
cobra.addCommand({ pattern: 'ttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_MSG })
  }
}));
cobra.addCommand({ pattern: 'attp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  }
}));
cobra.addCommand({ pattern: 'wttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/wttp.png', async() => { 
      ffmpeg('/root/wabotcobra/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/wttp.png', async() => { 
      ffmpeg('/root/wabotcobra/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'http ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/http.png', async() => { 
      ffmpeg('/root/wabotcobra/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/http.png', async() => { 
      ffmpeg('/root/wabotcobra/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'bttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/bttp.png', async() => { 
      ffmpeg('/root/wabotcobra/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/bttp.png', async() => { 
      ffmpeg('/root/wabotcobra/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'gttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/gttp.png', async() => { 
      ffmpeg('/root/wabotcobra/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/gttp.png', async() => { 
      ffmpeg('/root/wabotcobra/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'sttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/sttp.png', async() => { 
      ffmpeg('/root/wabotcobra/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/sttp.png', async() => { 
      ffmpeg('/root/wabotcobra/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'ettp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/ettp.png', async() => { 
      ffmpeg('/root/wabotcobra/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/ettp.png', async() => { 
      ffmpeg('/root/wabotcobra/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'ahttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/ahttp.gif', async() => { 
      ffmpeg('/root/wabotcobra/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/ahttp.gif', async() => { 
      ffmpeg('/root/wabotcobra/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
cobra.addCommand({ pattern: 'pttp ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await cobranpm.ttp(text, 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/pttp.gif', async() => { 
      ffmpeg('/root/wabotcobra/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await cobranpm.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/wabotcobra/pttp.gif', async() => { 
      ffmpeg('/root/wabotcobra/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/wabotcobra/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
