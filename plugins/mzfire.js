/* special thanks black amda script
re maker  cobra botdev
cobra dev
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const YTV_DESC = "Youtube Video ."
const YT_NEED = "Text effective Downloader V2."
const DWLOAD_VID = "*Download*"
const YTV_UP = "*Uploading*"
const NO_RESULT = "*can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

    cobra.addCommand({ pattern: 'mdfire ?(.*)', fromMe: true, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://api.zeks.xyz/api/mediafire?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&url=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const videoBuffer = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

else if (Config.WORKTYPE == 'public') {
    cobra.addCommand({ pattern: 'mdfire ?(.*)', fromMe: false, desc: YTV_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text)
        await axios
          .get(`https://api.zeks.xyz/api/mediafire?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&url=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const videoBuffer = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.pdf, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
