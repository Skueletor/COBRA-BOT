/*
cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot 
coded by cobradev- sisula welgamage
cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot 
*/


const cobra = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const PHONEDE_DESC = "ඔබ දෙන ලද දුරකතනයේ විස්තර ලැයිස්තුවක් පෙන්වයි."
const NEED_WORDC = "කරුණාකර නමක් ඇතුළත් කරන්න"
const USAGE = "..."
const LOADING = "searching detail..."
const PHN_NAME = "Phone Name-:"
const PHN_RDATE = "Release Date-:"
const PHN_SIZE = "Size-:"
const PHN_ANDRO = "Android Type-:"
const PHN_STOR = "Storage-:"
const PHN_DISP = "Display-:"
const PHN_INCH = "Inch-:"
const PHN_PIX = "Pixel(camera)-:"
const PHN_VPIX = "Video Pixel-:"
const PHN_RAM = "Ram Size-:"
const PHN_CHIP = "Chipset-:"
const PHN_BAT = "Battery-:"
const PHN_BTT = "Battery Type-:"
const PHN_DETAIL = "detail-:"
const NOT_FOUND = "*not found -:*"



if (Config.WORKTYPE == 'private') {

cobra.addCommand({ pattern: 'pdetail ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://zenzapi.xyz/api/gsmarena?query=${pname}&apikey=e75b25d89d`)
      .then(async (response) => {
        const {
              judul,
              rilis,
              thumb,
              ukuran,
              type, 
              storage, 
              display,
              inchi,
              pixel,
              videoPixel,
              ram,
              chipset,
              batrai,
              merek_batre,
              detail,
        } = response.data.result

        const profileBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_NAME}* ${judul} 
        *${PHN_RDATE}* ${rilis} 
        *${PHN_SIZE}* ${ukuran} 
        *${PHN_ANDRO}* ${type} 
        *${PHN_STOR}* ${storage} 
        *${PHN_DISP}* ${display} 
        *${PHN_INCH}* ${inchi} 
        *${PHN_PIX}* ${pixel} 
        *${PHN_VPIX}* ${videoPixel} 
        *${PHN_RAM}* ${ram} 
        *${PHN_CHIP}* ${chipset} 
        *${PHN_BAT}* ${batrai} 
        *${PHN_BTT}* ${merek_batre} 
        *${PHN_DETAIL}* ${detail}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
      )
  },

 )
}

if (Config.WORKTYPE == 'public') {

cobra.addCommand({ pattern: 'pdetail ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://zenzapi.xyz/api/gsmarena?query=${pname}&apikey=e75b25d89d`)
      .then(async (response) => {
        const {
              judul,
              rilis,
              thumb,
              ukuran,
              type, 
              storage, 
              display,
              inchi,
              pixel,
              videoPixel,
              ram,
              chipset,
              batrai,
              merek_batre,
              detail,
        } = response.data.result

        const profileBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_NAME}* ${judul} 
        *${PHN_RDATE}* ${rilis} 
        *${PHN_SIZE}* ${ukuran} 
        *${PHN_ANDRO}* ${type} 
        *${PHN_STOR}* ${storage} 
        *${PHN_DISP}* ${display} 
        *${PHN_INCH}* ${inchi} 
        *${PHN_PIX}* ${pixel} 
        *${PHN_VPIX}* ${videoPixel} 
        *${PHN_RAM}* ${ram} 
        *${PHN_CHIP}* ${chipset} 
        *${PHN_BAT}* ${batrai} 
        *${PHN_BTT}* ${merek_batre} 
        *${PHN_DETAIL}* ${detail}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
      )
  },

 )
}
