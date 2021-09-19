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
cobra.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'devil' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.devil ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bear ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'wolf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.wolf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.neon ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'future' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.future ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3neon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3neon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'light' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.light ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'joker' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.joker ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ninja' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ninja ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gerband' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gerband ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bokeh' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bokeh ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2marvel' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2marvel ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'avengers' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.avengers ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2graf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2graf ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lion' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lion ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ice' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ice ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'space' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.space ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fire' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fire ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'harry' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.harry ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cemetery' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cemetery ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glitch' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glitch ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'leaf' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.leaf ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'baloon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.baloon ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'textsnw' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.textsnw ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2grafiti' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2grafiti ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bglxy' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bglxy ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blackpink' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '3grfity' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.3grfity ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rglowing' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rglowing ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'pcute' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.pcute ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bgrond' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bgrond ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'glpubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.glpubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lipubg' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lipubg ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trbear' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trbear ᴄᴏʙʀᴀ' + ']\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
