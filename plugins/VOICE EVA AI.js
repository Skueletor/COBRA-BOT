/*Coded by whatsasena duplicated dev.
re edited / recoded by sisula welgamage
2021 cobra bot project
*/
const Asena = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_eva = ''
if (conf.LANG == 'TR') vtalk_dsc = 'Starts to pinky voice chat.', reply_eva = '*Reply to Any Voice Message!*'
if (conf.LANG == 'EN') vtalk_dsc = 'Starts to pinky voice chat.', reply_eva = '*Reply to Any Voice Message!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

Asena.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('bot') && conf.VOICEEVA !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'
        var finm = message.message.replace('bot', '').replace(' ', '')   
        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
        if (ainame !== 'Asena') return;
        var ldet = lngDetector.detect(finm)
        var trmsg = ''
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/tts?language=en&text=${fins}`, { responseType: 'arraybuffer' })
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
        })
    }
}));
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.VOICEEVA == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                        if (ainame !== 'Asena') return;
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/tts?language=en&text=${fins}`, { responseType: 'arraybuffer' })
                            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt:true, quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                    if (ainame !== 'Asena') return;
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/tts?language=en&text=${fins}`, { responseType: 'arraybuffer' })
                        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt:true, quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== 'english') {
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                } else { trmsg = finm }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/tts?language=en&text=${fins}`, { responseType: 'arraybuffer' })
                    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt:true, quoted: message.data})
                })
            }
        }

}));
var fulleva_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'EN') {
    fulleva_dsc = 'Activates full functional fulleva features. Turn your account into a ai chatbot!'
    already_on = 'voiceva artificial intelligence is already fully functional.'
    already_off = 'voiceva artificial intelligence is currently running semi-functional.'
    succ_on = 'voiceva Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'fulleva Set to Semi-Functional! Please wait a bit! ☑️'
}
if (conf.LANG == 'SI') {
    fulleva_dsc = 'Activates full functional fulleva features. Turn your account into a ai chatbot!'
    already_on = 'voiceva artificial intelligence is already fully functional.'
    already_off = 'voiceva artificial intelligence is currently running semi-functional.'
    succ_on = 'voiceva Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'fulleva Set to Semi-Functional! Please wait a bit! ☑️'
}
Asena.addCommand({ pattern: 'voiceva ?(.*)', desc: fulleva_dsc, fromMe: true,dontAddCommandList: true, usage: '.voiceva on / off' }, (async (message, match) => {
    var eva_status = `${conf.VOICEEVA}`
    if (match[1] == 'on') {
        if (eva_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['VOICE_EVA']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['VOICE_EVA']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    }
}));
