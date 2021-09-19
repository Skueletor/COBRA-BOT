/* Codded by Phaticusthiccy
redited by sisula welgamage
cobra bot dev.
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const cobra = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true


cobra.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/devil.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/bear.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'wolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/wolf.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/li.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'joker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/joker.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'ninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ninja.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'glitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tt.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'bokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/bkh.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/marvel.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/mar2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'avengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/aven.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tt2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ttgra.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/t2gra.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'lion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/lion.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon3.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'ice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ice.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/space.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'smoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/smoke.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'glow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/wabotcobra/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/glowttp.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
    })
}));
cobra.addCommand({pattern: 'fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tfire.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/hp.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: '4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/t4n.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'cemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
cobra.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/wabotcobra/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/cup.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
if (Config.WORKTYPE == 'public') {
    
    cobra.addCommand({pattern: 'devil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/devil.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/devil.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'bear ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/bear.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/bear.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = '';
        }
        thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/wolf.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/wolf.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'neon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/neon.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: '2neon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/neon2.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'light ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/li.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/li.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'joker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/joker.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/joker.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'ninja ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = '';
        }
        thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/ninja.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ninja.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/tt.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tt.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'bokeh ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/bkh.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/bkh.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/marvel.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/marvel.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: '2marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/mar2.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/mar2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'avengers ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/aven.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/aven.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/tt2.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tt2.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'graf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/ttgra.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ttgra.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: '2graf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/t2gra.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/t2gra.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'lion ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/lion.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/lion.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: '3neon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/neon3.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/neon3.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'ice ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/ice.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/ice.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'space ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = match[1];
            bottomText = 'ㅤ';
        }
        thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
            [`${topText}`, `${bottomText}`]
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/space.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/space.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'smoke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/smoke.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/smoke.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'glow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var download = async(uri, filename, callback) => {
            await request.head(uri, async(err, res, body) => {    
                await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };
        var uri = encodeURI(match[1])
        await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/wabotcobra/glowttp.jpg', async() => {                          
            await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/glowttp.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
        })
    }));
    cobra.addCommand({pattern: 'fire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/tfire.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/tfire.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'harry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/hp.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/hp.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: '4neon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/t4n.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/t4n.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'cemetery ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
    cobra.addCommand({pattern: 'cup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
            `${match[1]}`
            ).then(async (data) => { 
              try { 
                  var download = async(uri, filename, callback) => {
                      await request.head(uri, async(err, res, body) => {    
                          await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                      });
                  };
    
                  await download(`${data}`, '/root/wabotcobra/cup.jpg', async() => {                          
                      await message.client.sendMessage(message.jid,fs.readFileSync('/root/wabotcobra/cup.jpg'), MessageType.image, { caption: Config.CAPTION_MSG })
                  })
              } catch(err) { 
                  console.log(err)
              } 
        });
    }));
}