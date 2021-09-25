/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Cobra-bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.2 pro',
    CHANNEL: 'https://t.me/',
    SESSION: process.env.COBRA_SESSION === undefined ? '' : process.env.COBRA_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    ANTIGROUP: process.env.ANTIGRP_LINK === undefined ? 'false' : process.env.ANTIGRP_LINK,
    VOICEEVA: process.env.VOICE_EVA === undefined ? 'false' : process.env.VOICE_EVA,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    CAP_BIO: process.env.CAP_BIO === undefined ? '°•♛꧁COBRABOT꧂♛•°' : process.env.CAP_BIO,
    ANTIBAD: process.env.ANTIBAD === undefined ? 'false' : process.env.ANTIBAD,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.hizliresim.com/9tg3x8j.jpg' : process.env.ALIVE_LOGO,
    ALIVE_CMD: process.env.ALIVE_CMD === undefined ? 'alive' : process.env.ALIVE_CMD,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'bot' : process.env.BOT_NAME,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/dad5ef6acdf755b35bda1.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph/file/5850ee81491205afc2140.mp4' : process.env.BYE_GIF,
    XTEAM_API: process.env.XTEAM_API === undefined ? 'e790c2e470fd0a63' : process.env.XTEAM_API,
    ZEKS_API: process.env.ZEKS_API === undefined ? 'odsMYXx67ZhT38w5hp5mgRKO8En' : process.env.ZEKS_API,    
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*♦️ ඔබේ ගීතය Download කරමින් පවතී...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*♦️ ඔබේ ගීතය Upload කරමින් පවතී...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*♦️ ඔබේ වීඩියෝව Download කරමින් පවතී...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*♦️ ඔබේ වීඩියෝව Upload කරමින් පවතී...*' : process.env.VIDEO_UP,
    CAPTION_MSG: process.env.CAPTION_MSG === undefined ? 'Ⓒ︎Ⓞ︎Ⓟ︎Ⓘ︎Ⓡ︎Ⓘ︎Ⓖ︎Ⓗ︎Ⓣ︎ © | 🇨 🇴 🇧 🇷 🇦 🄱🄾🅃' : process.env.CAPTION_MSG,
    CMDP_MSG: process.env.CMDP_MSG === undefined ? 'default' : process.env.CMDP_MSG,
    CMDP_STICK: process.env.CMDP_STICK === undefined ? '✪' : process.env.CMDP_STICK,
    LOGOPK_IMG: process.env.LOGOPK_IMG === undefined ? 'https://telegra.ph/file/a1b5345cf2bb012740646.jpg' : process.env.LOGOPK_IMG,
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
  DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "393475528094-1415817281",
    SUPPORT2: "96176912958-1458298055",
    SUPPORT3: "393472769604-1446476993",
    OWN: "94784621232,0"
};
