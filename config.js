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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_23_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPb2h2dzZyOVBGcEJYc3d3SGUxRUhndFVHQ2xKMThmL2dkemMvRWJjbGVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjg2NTY3MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCMEZBNDhGMkVFM0RCNUZBMTRGODM5QkY5NzU1RTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU1NjYxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVcUZMWWZtUFNweVJNN0lCeTNWeXBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlNmIxYWMyLWE0MmMtNGY4YS1hN2JiLTIzZDFlZjFjNjQ4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDIzMixcbiAgICAgIDE3MCxcbiAgICAgIDI1MyxcbiAgICAgIDE3MCxcbiAgICAgIDExMSxcbiAgICAgIDIyOCxcbiAgICAgIDgyLFxuICAgICAgMTkxLFxuICAgICAgMjA2LFxuICAgICAgNjMsXG4gICAgICAyOCxcbiAgICAgIDIzMixcbiAgICAgIDIzMyxcbiAgICAgIDE5MSxcbiAgICAgIDQyLFxuICAgICAgNjAsXG4gICAgICAxNzAsXG4gICAgICAzNixcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA4OSxcbiAgICAgIDUxLFxuICAgICAgMjAzLFxuICAgICAgODEsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyMzUsXG4gICAgICAxMzgsXG4gICAgICAxMzUsXG4gICAgICAyMjAsXG4gICAgICA2LFxuICAgICAgMjEzLFxuICAgICAgMjUwLFxuICAgICAgMTM1LFxuICAgICAgMjQ4LFxuICAgICAgNDUsXG4gICAgICAzMCxcbiAgICAgIDI0NSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2Q0hYQlpXWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODY1NjcyNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTUlUTklDSyBGWCBGVU5EWlwiLFxuICAgIFwibGlkXCI6IFwiMTg3NjA4MTk4MjI3MzI6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdkNyN0FIRUxxNHRyUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImI1cVBhYU5INERKeDExUEFZOXdxZFEzTndOdWxEM2VMa2VYY2l0N2k5WFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUlCZXlPa3lxVEF3Q0k1SmF3K05mdUVlbEFKVjJYVzV4YkY5ZXNUK01ucUsybWJha1JFeGM2MlkvcnRaZzdRdk5tZG5vQWJOTk5wMnMrRzBzUEN6Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHUvUHdBR0xuNzJwa3V6L1VCWndYbHo1ekJlY3ZHOUsvY3YvT1NmS0NEc1J4dHplWEdVaGFoMU5XYzQwWkxqdmpCbmsvNlpKOERIWnBNZ2lOQTBDQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODY1NjcyNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NTY2MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIVzhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhXOC5qc29uIjogIntcImtleURhdGFcIjpcInRzeTFBcjlSUWlXSE80NTBpWU5hWllGcUF4U1JhV2JrbytGVmdvSWRBSE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4MDQ5MDA1OSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTU2MzQ3ODQ2XCJ9Igp9"  // PUT your SESSION_ID 


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
