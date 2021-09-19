/* coded by sisula welgamage
cobra bot project
2021
*/
const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
cobra.addCommand({pattern: 'textpro', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'textpro', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
     const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n' 

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'textpro', fromMe: false, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
     const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gstyle' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gstyle ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smetalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smetalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'swater3d' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.swater3d ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cutpaper' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cutpaper ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lshadow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lshadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gedge' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gedge ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'anglewing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.anglewing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lgream' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lgream ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'yasuo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.yasuo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lstage' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lstage ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'vgalaxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.vgalaxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fdragon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fdragon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'viettel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.viettel ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'birthday' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.birthday ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blove' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blove ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'frgg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.frgg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1bcake ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '4bcake' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.4bcake  ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n' 

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}

