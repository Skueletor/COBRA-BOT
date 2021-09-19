/* Codded by Phaticusthiccy
unlimited textmaker api
recoded by cobra dev sisula welgamage
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const cobra = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const cobranpm = require('cobrabot');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd

let wk = Config.WORKTYPE == 'public' ? false : true

cobra.addCommand({pattern: 'birthday ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/chocolate-birthday-cake-with-candle-with-name-generator-461.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'blove ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/heart-shaped-rose-birthday-cake-with-name-edit-469.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'frgg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-text-by-name-effect-58.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '1bcake ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-red-rose-birthday-cake-images-462.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '4bcake ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/romantic-anniversary-birthday-cake-with-name-edit-473.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'leaf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'baloon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'textsnw ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '2grafiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'bglxy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '2blackpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'trbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.gif })
}));
cobra.addCommand({pattern: '3grfity ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'rglowing ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'pcute ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'bgrnd ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'glpubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.mp4 })
}));
cobra.addCommand({pattern: 'lipubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.mp4 })
}));

cobra.addCommand({pattern: 'lovemsg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/lmsg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/lmsg.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'horror1 ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/horror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/horror.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'thunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/thusk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/thusk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'cloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/clod.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/clod.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'blackpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/blkpk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/blkpk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'dropwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/drpwter.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/drpwter.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'rcloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/rcld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/rcld.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fgraved ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/grved.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/grved.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fsand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/smsand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/smsand.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'feach ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/beak.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/beak.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '1917 ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/1917.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/1917.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/blood.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/blood.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fwindow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fwndo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fwndo.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'nature ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fwndo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fwndo.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'spark ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/firework-sparkle-text-effect-930.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fspk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fspk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/2blood.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/2blood.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'xpsure ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/double-exposure-text-effect-black-white-976.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/xposure.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/xposure.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'magma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/mggma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/mggma.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'shadow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/shdw.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/shdw.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
if (Config.WORKTYPE == 'public') {
    
cobra.addCommand({pattern: 'birthday ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/chocolate-birthday-cake-with-candle-with-name-generator-461.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
    
cobra.addCommand({pattern: 'blove ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/heart-shaped-rose-birthday-cake-with-name-edit-469.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
    
cobra.addCommand({pattern: 'frgg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-text-by-name-effect-58.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
    
cobra.addCommand({pattern: '1bcake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-red-rose-birthday-cake-images-462.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
    
cobra.addCommand({pattern: '4bcake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/romantic-anniversary-birthday-cake-with-name-edit-473.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
    cobra.addCommand({pattern: 'leaf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'baloon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'textsnw ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '2grafiti ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'bglxy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: '2blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'trbear ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.gif })
}));
cobra.addCommand({pattern: '3grfity ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'rglowing ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'pcute ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'bgrnd ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Config.CAPTION_MSG })
}));
cobra.addCommand({pattern: 'glpubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.mp4 })
}));
cobra.addCommand({pattern: 'lipubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  var img = await cobranpm.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: Config.CAPTION_MSG, mimetype: Mimetype.mp4 })
}));
    
cobra.addCommand({pattern: 'lovemsg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/lmsg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/lmsg.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'horror1 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/horror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/horror.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/thusk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/thusk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/clod.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/clod.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/blkpk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/blkpk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'dropwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/drpwter.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/drpwter.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'rcloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/rcld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/rcld.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fgraved ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/grved.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/grved.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fsand ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/smsand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/smsand.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'feach ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/beak.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/beak.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/1917.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/1917.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/blood.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/blood.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'fwindow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fwndo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fwndo.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'nature ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fwndo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fwndo.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/firework-sparkle-text-effect-930.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/fspk.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/fspk.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '2blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/2blood.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/2blood.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'xpsure ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/double-exposure-text-effect-black-white-976.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/xposure.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/xposure.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'magma ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/mggma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/mggma.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/shdw.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/shdw.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
}
    
