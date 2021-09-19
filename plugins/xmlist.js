const cobra = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('conventer');
const enmsg = '🔰 𝕏𝕞𝕖𝕕𝕚𝕒 𝕃𝕚𝕤𝕥 - ℂ𝕠𝕓𝕣𝕒𝕓𝕠𝕥 🔰' + '\n\n' + 
              '🛡 Usage: ' + '*.mp4enhance*' + '\n' +
              'Desc: ' + 'Enhance video’s quality.' + '\n\n' +
              '🛡 Usage: ' + '*.interp*' + '\n' +
              'Desc: ' + 'Increases the FPS of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4slowmo*' + '\n' +
              'Desc: ' + 'Applies true-slowmo to non-slow motion videos.' + '\n\n' +
              '🛡 Usage: ' + '*.x4mp4*' + '\n' +
              'Desc: ' + 'Reduce video’s quality by 75%.' + '\n\n' +
              '🛡 Usage: ' + '*.x2mp4*' + '\n' +
              'Desc: ' + 'Reduce video’s quality by 50%.' + '\n\n' +
              '🛡 Usage: ' + '*.gif*' + '\n' +
              'Desc: ' + 'Converts video to gif.' + '\n\n' +
              '🛡 Usage: ' + '*.agif*' + '\n' +
              'Desc: ' + 'Converts video to voiced gif.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4blur*' + '\n' +
              'Desc: ' + 'Blurs the background of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4stab*' + '\n' +
              'Desc: ' + 'Decreases the vibration of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4rainbow*' + '\n' +
              'Desc: ' + 'Applies a rainbow effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4color*' + '\n' +
              'Desc: ' + 'Makes the colors of the video more vivid and beautiful.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4art*' + '\n' +
              'Desc: ' + 'Applies a art effect to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4negative*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4vintage*' + '\n' +
              'Desc: ' + 'Applies a nostalgic effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4bw*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4reverse*' + '\n' +
              'Desc: ' + 'Plays the video in reverse.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4edge*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4image*' + '\n' +
              'Desc: ' + 'Converts photo to 5 sec video.' + '\n\n' +
              '🛡 Usage: ' + '*.spectrum*' + '\n' +
              'Desc: ' + 'Converts the spectrum of sound into video.' + '\n\n' +
              '🛡 Usage: ' + '*.waves*' + '\n' +
              'Desc: ' + 'Converts the wave range of sound to video.' + '\n\n' +
              '🛡 Usage: ' + '*.frequency*' + '\n' +
              'Desc: ' + 'Converts the frequency range of sound to video.' + '\n\n' +
              '🛡  Usage: ' + '*.avec*' + '\n' +
              'Desc: ' + 'Converts the histogram of sound to video.' + '\n\n' +
              '🛡 Usage: ' + '*.volumeaudio*' + '\n' +
              'Desc: ' + 'Converts the decibel value of the sound into video.' + '\n\n' +
              '🛡 Usage: ' + '*.cqtaudio*' + '\n' +
              'Desc: ' + 'Converts the CQT value of audio to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3eq*' + '\n' +
              'Desc: ' + 'Adjusts the sound to a crystal clear level.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3bass*' + '\n' +
              'Desc: ' + 'Adds crystal bass without distorting the sound.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3crusher*' + '\n' +
              'Desc: ' + 'Distorts the sound, makes ridiculous.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3reverse*' + '\n' +
              'Desc: ' + 'Plays the sound in reverse.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3pitch*' + '\n' +
              'Desc: ' + 'Makes the sound thinner and faster.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3low*' + '\n' +
              'Desc: ' + 'Makes the sound deep and slower.' + '\n\n' +
              '🛡 Usage: ' + '*.x2mp3*' + '\n' +
              'Desc: ' + 'Makes the sound twice as fast.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3volume*' + '\n' +
              'Desc: ' + 'Increase sound level so much.' + '\n\n' +
              '🛡 Usage: ' + '*.bwimage*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to image.' + '\n\n' +
              '🛡 Usage: ' + '*.vintageimage*' + '\n' +
              'Desc: ' + 'Applies a vinatge effect to photo.' + '\n\n' +
              '🛡 Usage: ' + '*.edgeimage*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.enhanceimage*' + '\n' +
              'Desc: ' + 'Makes the photo clearer.' + '\n\n' +
              '🛡 Usage: ' + '*.blurimage*' + '\n' +
              'Desc: ' + 'Blurs the background of the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.grenimage*' + '\n' +
              'Desc: ' + 'Applies grain effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.negativeimage*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.rainbowimage*' + '\n' +
              'Desc: ' + 'Applies rainbow effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.colorimage*' + '\n' +
              'Desc: ' + 'It makes the colors of the photo more vivid and attractive.' + '\n\n' +
              '🛡 Usage: ' + '*.artimage*' + '\n' +
              'Desc: ' + 'Applies a art effect to the photo.' + '\n\n' 

const simsg = '🔰 𝕏𝕞𝕖𝕕𝕚𝕒 𝕃𝕚𝕤𝕥 - ℂ𝕠𝕓𝕣𝕒𝕓𝕠𝕥 🔰' + '\n\n' + 
              '🛡 භාවිතය: ' + '*.mp4enhance*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.interp*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ FPS වැඩි කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4slowmo*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ සඳහා slow-motion සාදනු ඇත.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x4mp4*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x2mp4*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.gif*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව gif බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.agif*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4blur*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයේ පසුබිම බොඳ කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4stab*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ කම්පනය අඩු කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4rainbow*' + '\n' +
              'විස්තරය: ' + 'දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4color*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4art*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4negative*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවට සෘණ වර්ණ filter යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4vintage*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4bw*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ සඳහා black and white effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4reverse*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව reverse කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4edge*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට edge effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4image*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.spectrum*' + '\n' +
              'විස්තරය: ' + 'ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.waves*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.frequency*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡  භාවිතය: ' + '*.avec*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.volumeaudio*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.cqtaudio*' + '\n' +
              'විස්තරය: ' + 'CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3eq*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3bass*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය විකෘති නොකර Cristal Bass එකතු කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3crusher*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3reverse*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය reverse වාදනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3pitch*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය තුනී හා වේගවත් කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3low*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x2mp3*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3volume*' + '\n' +
              'විස්තරය: ' + 'ශබ්ද මට්ටම එතරම් වැඩි කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.bwimage*' + '\n' +
              'විස්තරය: ' + 'රූපයට black and white effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.vintageimage*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට vintage effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.edgeimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපයෙහි edge effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.enhanceimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය වඩාත් පැහැදිලි කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.blurimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපයේ පසුබිම බොඳ කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.grenimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා grain effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.negativeimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.rainbowimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා දේදුන්න filter යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.colorimage*' + '\n' +
              'විස්තරය: ' + 'එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.artimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා art effect යොදයි.' + '\n\n'
if (Config.WORKTYPE == 'private') {
    if (Config.LANG == 'SI') {
         cobra.addCommand({pattern: 'xmedia$', fromMe: true,  deleteCommand: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
    
if (Config.WORKTYPE == 'public') {
    if (Config.LANG == 'SI') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false,  deleteCommand: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
  
