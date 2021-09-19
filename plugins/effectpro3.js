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
cobra.addCommand({pattern: 'spack', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'spack', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'spack', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    ᴄᴏʙʀᴀ/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
