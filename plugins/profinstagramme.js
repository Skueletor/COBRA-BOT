/*copyrught (c) cobrabot
cobrabot project
2021
*/

const cobra = require('../events');
const pinstacobra = require('cobrabot');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;

if (Config.WORKTYPE == 'private') {
//npm  based profile instagrame {
cobra.addCommand({ pattern: 'profinsta ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))
    await message.sendMessage(infoMessage(Lang.LOADING))
    
    var payload = await pinstacobra.insta_profile(userName)  
        const msg = `*${Lang.USERNAME}*: ${payload.us_name}` + `\n` +
              `*${Lang.NAME}*: ${payload.f_name} `+ `\n` +
              `*${Lang.BIO}*: ${payload.pr_bio} `+ `\n` +
              `*${Lang.FOLLOWERS}*: ${payload.fol_count} `+ `\n` +
              `*${Lang.FOLLOWS}*: ${payload.fwing_cnt} `+ `\n` +
              `*${Lang.PUBLIC}*: ${payload.ex_url}`
        var iavatar = await axios.get(payload.pic_url,{responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(iavatar.data), MessageType.image, {
          caption: msg
        })    
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },

 )
}
else if (Config.WORKTYPE == 'public') {

cobra.addCommand({ pattern: 'profinsta ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))
    await message.sendMessage(infoMessage(Lang.LOADING))
    
    var payload = await pinstacobra.insta_profile(userName)  
        const msg = `*${Lang.USERNAME}*: ${payload.us_name}` + `\n` +
              `*${Lang.NAME}*: ${payload.f_name} `+ `\n` +
              `*${Lang.BIO}*: ${payload.pr_bio} `+ `\n` +
              `*${Lang.FOLLOWERS}*: ${payload.fol_count} `+ `\n` +
              `*${Lang.FOLLOWS}*: ${payload.fwing_cnt} `+ `\n` +
              `*${Lang.PUBLIC}*: ${payload.ex_url}`
        var iavatar = await axios.get(payload.pic_url,{responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(iavatar.data), MessageType.image, {
          caption: msg
        })    
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },

 )
}
// npm  based profile instagrame }
