/* coded by sisula welgamage
cobrabot project
2021
*/

const cobra = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const {uploadByBuffer} = require('cobrabot-patch')
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('profile');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

cobra.addCommand({pattern: 'kickme$', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true, dontAddCommandList: true}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

cobra.addCommand({pattern: 'pp$', fromMe: true, desc: Lang.PP_DESC, dontAddCommandList: true}, (async (message, match) => {    
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

cobra.addCommand({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC, dontAddCommandList: true}, (async (message, match) => {   
    if (Config.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

cobra.addCommand({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC, dontAddCommandList: true}, (async (message, match) => { 
    if (Config.UNBLOCKMSG == 'default') { 
   
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
}));
/* COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT COBRA BOT */var _0xfcc75b=_0x38c7;(function(_0x3a382a,_0x15d6c7){var _0x43884e=_0x38c7,_0x6a87b7=_0x3a382a();while(!![]){try{var _0x4edeca=-parseInt(_0x43884e(0x1ef))/0x1*(parseInt(_0x43884e(0x1f4))/0x2)+parseInt(_0x43884e(0x1eb))/0x3+parseInt(_0x43884e(0x1f7))/0x4*(parseInt(_0x43884e(0x1f1))/0x5)+-parseInt(_0x43884e(0x1ea))/0x6+parseInt(_0x43884e(0x1dd))/0x7+-parseInt(_0x43884e(0x1f3))/0x8*(-parseInt(_0x43884e(0x1de))/0x9)+parseInt(_0x43884e(0x1f5))/0xa;if(_0x4edeca===_0x15d6c7)break;else _0x6a87b7['push'](_0x6a87b7['shift']());}catch(_0x59af4f){_0x6a87b7['push'](_0x6a87b7['shift']());}}}(_0x3b4f,0xacf5e));var SUCC_SETWELCOME='';if(Config[_0xfcc75b(0x1ed)]=='SI')SUCC_SETWELCOME=_0xfcc75b(0x1e4);if(Config[_0xfcc75b(0x1ed)]=='EN')SUCC_SETWELCOME='✅\x20Successfully\x20Setted\x20Welcome\x20Gif';var SUCC_BYE='';function _0x3b4f(){var _0x34bf8d=['*♻️\x20සකස්\x20කරමින්...මඳක්\x20රැඳී\x20සිටින්න*','quotedMessage','text','patch','video/mp4','✅\x20LOGO\x20PACK\x20IMG\x20සාර්ථකව\x20සකසා\x20ඇත','7187656HqbHzD','909iHcZEp','image/png','setalive$','client','reply_message','downloadAndSaveMediaMessage','✅\x20පිළිගැනීමේ\x20Gif\x20සාර්ථකව\x20සකසා\x20ඇත','readFileSync','✅\x20Successfully\x20Setted\x20Alive\x20Logo','✅\x20ALIVE\x20LOGO\x20සාර්ථකව\x20සකසා\x20ඇත','image','then','5198046mptsTy','483138KXSSpn','/config-vars','LANG','BYE_GIF','632846gpAtul','video','4140035vXbwrH','WELCOME_GIF','47632RpJBUG','4mxUlrs','2232640QqHLzQ','*❌\x20කරුණාකර\x20වීඩියෝවකට\x20හෝ\x20පින්තූරයකට\x20mention\x20දෙන්න*','4Jwgtcl','✅\x20Successfully\x20Setted\x20Logo\x20Pack\x20Img','setlogopk$','sendMessage','LOGOPK_IMG','ALIVE_LOGO','data','setbye$','jid','*❌\x20Pleace\x20Mention\x20Video\x20or\x20Image*'];_0x3b4f=function(){return _0x34bf8d;};return _0x3b4f();}function _0x38c7(_0x941db4,_0x23deba){var _0x3b4fcc=_0x3b4f();return _0x38c7=function(_0x38c7c5,_0x1c5e81){_0x38c7c5=_0x38c7c5-0x1da;var _0x5c9130=_0x3b4fcc[_0x38c7c5];return _0x5c9130;},_0x38c7(_0x941db4,_0x23deba);}if(Config[_0xfcc75b(0x1ed)]=='SI')SUCC_BYE='✅\x20සමුගැනීමෙ\x20Gif\x20සාර්ථකව\x20සකසා\x20ඇත';if(Config[_0xfcc75b(0x1ed)]=='EN')SUCC_BYE='✅\x20Successfully\x20Setted\x20Goodbye\x20Gif';var SUCC_ALIVE='';if(Config[_0xfcc75b(0x1ed)]=='SI')SUCC_ALIVE=_0xfcc75b(0x1e7);if(Config[_0xfcc75b(0x1ed)]=='EN')SUCC_ALIVE=_0xfcc75b(0x1e6);var SUCC_LGOPK='';if(Config[_0xfcc75b(0x1ed)]=='SI')SUCC_LGOPK=_0xfcc75b(0x1dc);if(Config[_0xfcc75b(0x1ed)]=='EN')SUCC_LGOPK=_0xfcc75b(0x1f8);var NEED_PHOTO='';if(Config[_0xfcc75b(0x1ed)]=='SI')NEED_PHOTO=_0xfcc75b(0x1f6);if(Config['LANG']=='EN')NEED_PHOTO=_0xfcc75b(0x200);var SETUP='';if(Config[_0xfcc75b(0x1ed)]=='SI')SETUP=_0xfcc75b(0x201);if(Config[_0xfcc75b(0x1ed)]=='EN')SETUP='*♻️\x20Preparing...Please\x20Wait*';const PP_DESC='';cobra['addCommand']({'pattern':'setwelcome$','fromMe':!![],'desc':PP_DESC,'dontAddCommandList':!![]},async(_0x37822b,_0x505308)=>{var _0x3f1664=_0xfcc75b;if(!_0x37822b[_0x3f1664(0x1e2)]||!_0x37822b['reply_message']['video'])return await _0x37822b['client'][_0x3f1664(0x1fa)](_0x37822b[_0x3f1664(0x1ff)],NEED_PHOTO,MessageType[_0x3f1664(0x203)]);var _0x846bef=await _0x37822b['client'][_0x3f1664(0x1fa)](_0x37822b[_0x3f1664(0x1ff)],SETUP,MessageType['text']),_0x3987ff=await _0x37822b['client']['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x37822b[_0x3f1664(0x1e2)][_0x3f1664(0x1ff)],'id':_0x37822b[_0x3f1664(0x1e2)]['id']},'message':_0x37822b['reply_message'][_0x3f1664(0x1fd)][_0x3f1664(0x202)]});await uploadByBuffer(fs[_0x3f1664(0x1e5)](_0x3987ff),_0x3f1664(0x1db))['then'](async _0x38ffd5=>{var _0x5d428e=_0x3f1664;const {link:_0x42e1c1,path:_0x554a3d}=_0x38ffd5;await heroku[_0x5d428e(0x1da)](baseURI+_0x5d428e(0x1ec),{'body':{[_0x5d428e(0x1f2)]:_0x42e1c1}}),await _0x37822b[_0x5d428e(0x1e1)][_0x5d428e(0x1fa)](_0x37822b[_0x5d428e(0x1ff)],'*'+SUCC_SETWELCOME+'*',MessageType['text']);});}),cobra['addCommand']({'pattern':_0xfcc75b(0x1fe),'fromMe':!![],'desc':PP_DESC,'dontAddCommandList':!![]},async(_0x366523,_0x3fad55)=>{var _0x34c36b=_0xfcc75b;if(!_0x366523[_0x34c36b(0x1e2)]||!_0x366523[_0x34c36b(0x1e2)][_0x34c36b(0x1f0)])return await _0x366523[_0x34c36b(0x1e1)]['sendMessage'](_0x366523[_0x34c36b(0x1ff)],NEED_PHOTO,MessageType[_0x34c36b(0x203)]);var _0x282c79=await _0x366523['client']['sendMessage'](_0x366523[_0x34c36b(0x1ff)],SETUP,MessageType['text']),_0x49d997=await _0x366523[_0x34c36b(0x1e1)][_0x34c36b(0x1e3)]({'key':{'remoteJid':_0x366523[_0x34c36b(0x1e2)][_0x34c36b(0x1ff)],'id':_0x366523['reply_message']['id']},'message':_0x366523[_0x34c36b(0x1e2)][_0x34c36b(0x1fd)][_0x34c36b(0x202)]});await uploadByBuffer(fs['readFileSync'](_0x49d997),_0x34c36b(0x1db))[_0x34c36b(0x1e9)](async _0x3226d7=>{var _0x38abab=_0x34c36b;const {link:_0x666ba8,path:_0x4622be}=_0x3226d7;await heroku[_0x38abab(0x1da)](baseURI+'/config-vars',{'body':{[_0x38abab(0x1ee)]:_0x666ba8}}),await _0x366523[_0x38abab(0x1e1)]['sendMessage'](_0x366523[_0x38abab(0x1ff)],'*'+SUCC_BYE+'*',MessageType[_0x38abab(0x203)]);});}),cobra['addCommand']({'pattern':_0xfcc75b(0x1e0),'fromMe':!![],'desc':PP_DESC,'dontAddCommandList':!![]},async(_0x33524c,_0x9b69c4)=>{var _0x16128e=_0xfcc75b;if(!_0x33524c['reply_message']||!_0x33524c[_0x16128e(0x1e2)][_0x16128e(0x1e8)])return await _0x33524c['client']['sendMessage'](_0x33524c['jid'],NEED_PHOTO,MessageType[_0x16128e(0x203)]);var _0x19cc24=await _0x33524c[_0x16128e(0x1e1)]['sendMessage'](_0x33524c[_0x16128e(0x1ff)],SETUP,MessageType['text']),_0x16beb3=await _0x33524c[_0x16128e(0x1e1)][_0x16128e(0x1e3)]({'key':{'remoteJid':_0x33524c[_0x16128e(0x1e2)][_0x16128e(0x1ff)],'id':_0x33524c[_0x16128e(0x1e2)]['id']},'message':_0x33524c[_0x16128e(0x1e2)][_0x16128e(0x1fd)][_0x16128e(0x202)]});await uploadByBuffer(fs[_0x16128e(0x1e5)](_0x16beb3),_0x16128e(0x1df))[_0x16128e(0x1e9)](async _0x2af8f0=>{var _0x26ce17=_0x16128e;const {link:_0x4e41a4,path:_0xd1f562}=_0x2af8f0;await heroku[_0x26ce17(0x1da)](baseURI+_0x26ce17(0x1ec),{'body':{[_0x26ce17(0x1fc)]:_0x4e41a4}}),await _0x33524c[_0x26ce17(0x1e1)]['sendMessage'](_0x33524c[_0x26ce17(0x1ff)],'*'+SUCC_ALIVE+'*',MessageType['text']);});}),cobra['addCommand']({'pattern':_0xfcc75b(0x1f9),'fromMe':!![],'desc':PP_DESC,'dontAddCommandList':!![]},async(_0x8b9464,_0x4cbb57)=>{var _0x42f1fc=_0xfcc75b;if(!_0x8b9464[_0x42f1fc(0x1e2)]||!_0x8b9464['reply_message'][_0x42f1fc(0x1e8)])return await _0x8b9464[_0x42f1fc(0x1e1)][_0x42f1fc(0x1fa)](_0x8b9464['jid'],NEED_PHOTO,MessageType[_0x42f1fc(0x203)]);var _0x3c9dcc=await _0x8b9464[_0x42f1fc(0x1e1)]['sendMessage'](_0x8b9464[_0x42f1fc(0x1ff)],SETUP,MessageType[_0x42f1fc(0x203)]),_0x7f71f9=await _0x8b9464[_0x42f1fc(0x1e1)][_0x42f1fc(0x1e3)]({'key':{'remoteJid':_0x8b9464[_0x42f1fc(0x1e2)]['jid'],'id':_0x8b9464[_0x42f1fc(0x1e2)]['id']},'message':_0x8b9464[_0x42f1fc(0x1e2)][_0x42f1fc(0x1fd)][_0x42f1fc(0x202)]});await uploadByBuffer(fs[_0x42f1fc(0x1e5)](_0x7f71f9),'image/png')['then'](async _0x39f06b=>{var _0x188b40=_0x42f1fc;const {link:_0x454ee4,path:_0x54f004}=_0x39f06b;await heroku[_0x188b40(0x1da)](baseURI+_0x188b40(0x1ec),{'body':{[_0x188b40(0x1fb)]:_0x454ee4}}),await _0x8b9464[_0x188b40(0x1e1)][_0x188b40(0x1fa)](_0x8b9464[_0x188b40(0x1ff)],'*'+SUCC_LGOPK+'*',MessageType[_0x188b40(0x203)]);});});
if (Config.WORKTYPE == 'private') {

    cobra.addCommand({pattern: 'jid ?(.*)', fromMe: true, desc: Lang.JID_DESC, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    cobra.addCommand({pattern: 'jid ?(.*)', fromMe: false, desc: Lang.JID_DESC, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}

