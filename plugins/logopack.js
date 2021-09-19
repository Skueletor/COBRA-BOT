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
cobra.addCommand({pattern: 'npack', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lovemsg ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lovemsg  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'horror1 ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.horror1 ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'thunder' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.thunder  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blackpink ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dropwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dropwater  ᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rcloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rcloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fgraved' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fgraved  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fsand' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fsand ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'feach' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.feach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1917' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1917  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwindow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwindow  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blood ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'spark' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.spark ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xpsure' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xpsure ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'magma ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.magma ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'shadow ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.shadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trnsfm ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trnsfm  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'city3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.city3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nt3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nt3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ev3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ev3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'sea3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.sea3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bdr3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bdr3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2nat ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2nat  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2sky   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2sky   ᴄᴏʙʀᴀ' + ']\n\n' + 
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'npack', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lovemsg ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lovemsg  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'horror1 ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.horror1 ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'thunder' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.thunder  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blackpink ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dropwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dropwater  ᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rcloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rcloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fgraved' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fgraved  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fsand' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fsand ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'feach' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.feach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1917' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1917  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwindow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwindow  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blood ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'spark' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.spark ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xpsure' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xpsure ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'magma ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.magma ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'shadow ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.shadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trnsfm ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trnsfm  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'city3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.city3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nt3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nt3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ev3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ev3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'sea3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.sea3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bdr3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bdr3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2nat ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2nat  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2sky   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2sky   ᴄᴏʙʀᴀ' + ']\n\n' + 
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'           

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'npack', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'lovemsg ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.lovemsg  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'horror1 ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.horror1 ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'thunder' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.thunder  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blackpink ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blackpink ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dropwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dropwater  ᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'rcloud' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.rcloud ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fgraved' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fgraved  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fsand' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fsand ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'feach' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.feach  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '1917' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.1917  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blood  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fwindow' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fwindow  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2blood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2blood ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'spark' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.spark ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xpsure' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xpsure ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'magma ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.magma ᴄᴏʙʀᴀ/ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'shadow ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.shadow ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'smoke' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.smoke ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'trnsfm ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.trnsfm  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'city3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.city3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nt3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nt3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ev3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ev3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'sea3d ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.sea3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bdr3d  ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bdr3d  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2nat ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2nat  ᴄᴏʙʀᴀ' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + '2sky   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.2sky   ᴄᴏʙʀᴀ' + ']\n\n' + 
            '   ┏━━━━━°❀❀°━━━━━┓\n   🐍COBRA LOGO PACK🐍\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'        

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
