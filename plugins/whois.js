const cobra = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');//language info
const INFO_DESC = "කණ්ඩායමේ හෝ පුද්ගලයාගේ පාර-දත්ත දත්ත පෙන්වයි."//info
const GROUP_SUB = "*💠කණ්ඩායමේ නම:*"//info
const GROUP_JID = "*💭කණ්ඩායමේ JID අංකය:*"//info
const GROUP_OWNER = "*⚜️කණ්ඩායම් අයිතිය:*"//info
const GROUP_LINK = "*🆔කණ්ඩායමේ කේතය:*"//info
const GROUP_DES = "*💠කණ්ඩායම් විස්තරය:*"//info
const PRO_DES = "*🗨️ විස්තරය :*"//info
const PRO_JID = "*💬 User JID අංකය :*"//info

if (Config.WORKTYPE == 'private') {
    cobra.addCommand({ pattern: 'info', fromMe: true,  deleteCommand: false,  desc: INFO_DESC}, async (message, match) => { 

        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = GROUP_SUB + `\n ${nwjson.subject} \n\n` + GROUP_JID + `\n ${json.id} \n\n` + GROUP_OWNER + `\n ${json.owner} \n\n` + GROUP_LINK + `\n https://chat.whatsapp.com/${code} \n\n` + GROUP_DES + `\n ${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const infodata = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer.from(infodata.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const pgmsg = PRO_JID + `\n ${usexists.jid} \n\n` + PRO_DES + `\n ${status.status}`
            const prodata = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(prodata.data), 
                MessageType.image, 
                { caption: pgmsg }
            );
        }
    });
}

else if (Config.WORKTYPE == 'public') {
    cobra.addCommand({ pattern: 'info', fromMe: false, desc: INFO_DESC}, async (message, match) => { 
        
        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = GROUP_SUB + `\n ${nwjson.subject} \n\n` + GROUP_JID + `\n ${json.id} \n\n` + GROUP_OWNER + `\n ${json.owner} \n\n` + GROUP_LINK + `\n https://chat.whatsapp.com/${code} \n\n` + GROUP_DES + `\n ${nwjson.desc}`
            
            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const infodata = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer.from(infodata.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const pgmsg = PRO_JID + `\n ${usexists.jid} \n\n` + PRO_DES + `\n ${status.status}`
            const prodata = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(prodata.data), 
                MessageType.image, 
                { caption: pgmsg }
            );
        }
    });
}
