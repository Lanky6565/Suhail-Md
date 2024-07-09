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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_37_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVEFLTGZTWnlLRFhzZnJNY1huTG8yYnFhMi9Ic3hXVllaZVlRSFVDa1JnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDc4Mjk4NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDVGNUM5MDlFQjU1NjIyOTNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU1Mzg2MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTa1F1UjhrYVRpU1NSUUk2b3ZhZFdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkYWEyNjg5LWM5NGMtNDM1My1iNDhlLTljNWVmNjIxN2I0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxOTIsXG4gICAgICAyMTAsXG4gICAgICAxOTcsXG4gICAgICAyMjQsXG4gICAgICAxMDYsXG4gICAgICAyMzIsXG4gICAgICA3NSxcbiAgICAgIDQ0LFxuICAgICAgOTQsXG4gICAgICA0MSxcbiAgICAgIDEwMCxcbiAgICAgIDEyNCxcbiAgICAgIDEyOCxcbiAgICAgIDksXG4gICAgICAxMjEsXG4gICAgICA3LFxuICAgICAgMTA1LFxuICAgICAgNDksXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDE3OCxcbiAgICAgIDE2MSxcbiAgICAgIDEzNCxcbiAgICAgIDExMCxcbiAgICAgIDgyLFxuICAgICAgMTQ5LFxuICAgICAgMTcsXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDExOSxcbiAgICAgIDUsXG4gICAgICAxNTEsXG4gICAgICAyMDIsXG4gICAgICA0NCxcbiAgICAgIDE1MSxcbiAgICAgIDE3OCxcbiAgICAgIDg4LFxuICAgICAgMTUyLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUQ3M005UE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDc4Mjk4Nzg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODQxNzMwMzU1NjEyMjoyNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPQkEgRmFtaWx5IPCfjJdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTzNtOHNJRVB5aXRyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU1TjRDNFZNZXhKL0YyTHFxL2d0YjVTNkJPcUFoRkR0WXFnVTNVNFBoVEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQnhuZmxwR1FEeTJxaXFERjFoMDlDa0JuQklKZTg3VnZtbWhxWm5mQjVTTTRDaEVPalluaGNOeWRTdnk3c0xRbGU5T012T1pKeEY3dENjZzFTSDk1aVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGNQWmFad1M3bTcxQ3pWSlBsM1JKK0xWRWd6TTJmQWRERWdFaFd4K3E1TzBTaXlmVFNHWjNmREpZWlM0eG12QnJkR0JVdkRNMW1LTSszZ3ZxSHJUZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNzgyOTg3ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1Mzg1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1lUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWVSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2xZbHgyWUFZcmh3cnA2ZjZHQk8yanNsTDdtU3NJNnUwdEhreHM3eld6UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzA1MjE5NTA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwODcwNzgxOTVcIn0iCn0="  // PUT your SESSION_ID 


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
