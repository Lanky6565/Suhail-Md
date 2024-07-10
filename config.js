const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347039570336" // Developer Contact you fit change am just note any changes you make go deploy 
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176,2349157321797";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_42_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB2ZFFveG1UVzhLdlprdm8rLzZadHhpd1RKenJDcVcrNEtmODJRci9rUGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJNUFV0UW53VEdtWHp3eXIxeFlyNEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWU5ODRhZTYtMzExZS00MWVkLWFkMjctYzA0ZDk3ZTg5NzhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIsXG4gICAgICAxNjQsXG4gICAgICAxNjAsXG4gICAgICAxNDUsXG4gICAgICA0MCxcbiAgICAgIDc0LFxuICAgICAgMTc2LFxuICAgICAgMjIzLFxuICAgICAgMTcsXG4gICAgICA5NixcbiAgICAgIDI0MSxcbiAgICAgIDY1LFxuICAgICAgMjAsXG4gICAgICAxNixcbiAgICAgIDE0MSxcbiAgICAgIDExLFxuICAgICAgMTAwLFxuICAgICAgMjMwLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAyMjYsXG4gICAgICA0MCxcbiAgICAgIDcsXG4gICAgICAxNixcbiAgICAgIDE2NSxcbiAgICAgIDE4NixcbiAgICAgIDIyNCxcbiAgICAgIDE1MixcbiAgICAgIDIzNyxcbiAgICAgIDE1NCxcbiAgICAgIDE1OSxcbiAgICAgIDIwNCxcbiAgICAgIDI4LFxuICAgICAgMTc4LFxuICAgICAgNTEsXG4gICAgICAxMTUsXG4gICAgICAxNDUsXG4gICAgICAyMTAsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIUDFLTEJHVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MDYxNzY1NjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYxMTUxMjQxODU1MDIzOjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083VWp2OExFT2lpcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEkvQlVNSmIrYXhaQk9tSis5SUpIcHVRUkJhc2VWYXhKYlVLR2dMb3ptST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2VmxKZ04zRXpGQXZxK21MZTZSb05Nc2xBK2JVRFNnYVFzM3hjNitMUUdmNkovVUlNaW1mdFA2U2didkd4TmNUWXp0d1dtV0RWbWpzVXNYeWlGVC9CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzT1Nibk5kNlZvbmM1NU5BdVpRUE1LWWRlN1BpcngxdktyU1lTT21RcFhEaUE4MFhKOE5YSEJoY29HRU1IY09ZbWJNSVFSbHJQOGxwcmF6VldaVjFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQwNjE3NjU2OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTg5MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzUS5qc29uIjogIntcImtleURhdGFcIjpcIklEb011ajY4S0Q5bkk0OUZJdithc01EMmFZejN1OXJnc25OcTJ1VTRLVW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIxOTM2ODU1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMjU4OTI5MzY5XCJ9Igp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";










// well thats everything once you tap commit changes it starts deployment ill show you










global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
