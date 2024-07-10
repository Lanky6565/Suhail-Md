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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_26_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktZVjl1cDdKeExFcWdoRTloZTRRZUExWEJNenE2V1gwNkJCQzR2dDBRZk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllLdUxTQjhqVHN1ZlBxUmFIMlhjdGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQyZTc4NjctMGE2ZS00ZTg0LTkwNTEtYTAzZjFmMWQ0NDA3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgOTcsXG4gICAgICAxNCxcbiAgICAgIDE1MCxcbiAgICAgIDEyLFxuICAgICAgMTIzLFxuICAgICAgNixcbiAgICAgIDEzNyxcbiAgICAgIDM5LFxuICAgICAgMTA2LFxuICAgICAgMzAsXG4gICAgICAxNzcsXG4gICAgICAyMTAsXG4gICAgICAxMjcsXG4gICAgICAyNTQsXG4gICAgICAxMjgsXG4gICAgICAzNCxcbiAgICAgIDE5MixcbiAgICAgIDIyNSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxNDAsXG4gICAgICAxMSxcbiAgICAgIDE1NixcbiAgICAgIDE2NixcbiAgICAgIDExNyxcbiAgICAgIDE4NSxcbiAgICAgIDE4MSxcbiAgICAgIDI1MSxcbiAgICAgIDE1NixcbiAgICAgIDE0MCxcbiAgICAgIDE1MyxcbiAgICAgIDI0OCxcbiAgICAgIDIxNCxcbiAgICAgIDE1NCxcbiAgICAgIDgzLFxuICAgICAgMTYxLFxuICAgICAgNTgsXG4gICAgICA5MyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWk1DOTlMMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NDkxODM4MDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2MzQzODc0MDgwOTI4OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05PMGdmb0xFSkhUdUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGcxQTc1UXBjWnlwaUt1dmd5V3VDbTVpeGN1WE5FR2tGc2tPQ0U1bVJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZMzdJMmF5anl6YUg3WG1sNGNTKzFrK3M0QmpuclFydEM3WFFHZFdINTNUMkxGc0lqS2F2SWt1NVduMzV1WkY1U3Nxc2FGVm5GNmw3d0poZkdHMFRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRU81SXZmYW9HMEI0K1cxRTB6cytsTStjRkFscStOSjBZYUVXZHpPc3pYWnFJemcraFlYSFZORHBOOTRVd29abk5jdVdzdGRnQ3BUTVlOODdnYzVqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU0OTE4MzgwOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5Mjc4OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


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
