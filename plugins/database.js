const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message! AspirerX.
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'Hic}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Ownercmd 🔰\n\n*AspirerXBot has two types of alive message*\n\n*Hi i am live {pp}*\n\n*Hi i am alive {qt}*\n\n*welcome message addedd simple way*\n\n*.welcome {pp} {gphead} {gpmaker} {gpdesc}{owner}*\n\n*Another way*\n*.welcome {gif} {gphead} {gpmaker} {gpdesc} {time} {owner}*\n\n*Broadcast adedd replay with any message .bc*\n\n*Alive message time set*\n\n*Button message added .bot and .help*\n\n*All type of downloading command example .yt, .video, .song, .get*\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'Support 🔰\n\n```My support group: https://https://t.me/kayaspirerproject```\n\n```Follow the owner on twitter: @marangadavid2```\n\n```Why me?:  I'm the most advanced bot to help you manage your gcs```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' Heya....👋🏻\n\n```BOT NAME:``` *'+Config.BOT+'*\n\n🃏 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🍒 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n🃏 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '© AspirerX',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
