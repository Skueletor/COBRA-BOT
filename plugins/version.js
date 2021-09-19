/* coded by sisula welgamage
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
//language support____
const FONT_DESC = "..."
const FONT_NEED = "..."
const CVD_COUN = ""
const NO_RESULT = "..."
//end language

if (Config.WORKTYPE == 'private') {

    cobra.addCommand({ pattern: 'version$', fromMe: true, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {           
        await axios
          .get(`https://gist.githubusercontent.com/Sf0gmailcomceb5ace3/901ad126792e5c5143935c9c60b12a01/raw/`)
          .then(async (response) => {
            const {//site datas
                    infoen,
            } = response.data.announcements
            const msg =`${infoen}`                                                                   
            await message.client.sendMessage(message.jid,msg ,MessageType.text)           
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

if (Config.WORKTYPE == 'public') {

    cobra.addCommand({ pattern: 'version$', fromMe: true, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {           
        await axios
          .get(`https://gist.githubusercontent.com/Sf0gmailcomceb5ace3/901ad126792e5c5143935c9c60b12a01/raw/`)
          .then(async (response) => {
            const {//site datas
                    infoen,
            } = response.data.announcements
            const msg =`${infoen}`                                                                   
            await message.client.sendMessage(message.jid,msg ,MessageType.text)           
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
