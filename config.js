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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_25_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVU1Jcnl3SnQ1ZHFwMHVCeW5kdmh6cGxINCtKck9GVW1JZndCNXhQQnJEWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQxMTQyNTY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QkNEQjdGRUQyQ0M0QUYzRDMxMjk4NjM2M0RBQjQ4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NDk1MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZUJrdlZDSE1RR2UzWjlrQk5wLVc1d1wiLFxuICBcInBob25lSWRcIjogXCI3ODIxMDk4OC04M2VmLTRhMmYtYTU1ZC01ZjdjOGQ0OTlmYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTk4LFxuICAgICAgMjIzLFxuICAgICAgMjI2LFxuICAgICAgMTAzLFxuICAgICAgMTcxLFxuICAgICAgMTEwLFxuICAgICAgMjI3LFxuICAgICAgMTI1LFxuICAgICAgMTE2LFxuICAgICAgMTI4LFxuICAgICAgMjE3LFxuICAgICAgMTQsXG4gICAgICA0NixcbiAgICAgIDE3OSxcbiAgICAgIDI0NCxcbiAgICAgIDI4LFxuICAgICAgMjAzLFxuICAgICAgMTEzLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDE0OCxcbiAgICAgIDI5LFxuICAgICAgNDQsXG4gICAgICAxNjMsXG4gICAgICAxNTMsXG4gICAgICA1LFxuICAgICAgMjYsXG4gICAgICA2NixcbiAgICAgIDg1LFxuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgMTEyLFxuICAgICAgMjIyLFxuICAgICAgMTY1LFxuICAgICAgMjM2LFxuICAgICAgMTczLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDYxTlhBUE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDExNDI1Njk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzIxNjAzMTYwNDc5OTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPKytsY1ErSUMydEFZWUJ5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1hMRGRENVd0d1V5MWE4eU91OWowRlNFd2NQa0pDV0VtdHVQdlNMNElCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5R25BM0I3cFNvdXk4VUpOalNpZGtNYXE2UXRSZzVGcWwvWmxFZUJsYk1MTm43RDRuR3hYa1JWeW1LWlVxM3FOMDVFTkFKbEQ2RHlvd1dyd2NsTElCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHNjdVSkRBcEk2MkcvTTVMUDkvQUVrTDQzYVdiNlJXZDExL2l2MW90d0x2c2l1Ni9rL3NnSmxUVWlQcmxuajdiVDliOUhiR3lVQitGUkNCbkU4NVZpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQxMTQyNTY5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTQ5NDk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWZYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0elRFZFVVUmZ2VU1GK040UnJ6VjF0RmdEU3pzWlRZZXJNemxyZ0hqZm5ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQ1OTAxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
