
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUXXOiSBT9L/0aawIIIlalavkOKooiQdjahxYa7MhXuhsFp/LftzDJTqpmdjbLU3Np7j3n3HPvd1DVmKIF6sHsO2gIPkOGhiPrGwRmQGuzDBEwAilkEMzAaeXh6d59cXhz1bYnMfZ5vJjuix3f++YFb1o7OndPiWiZwQN4HYGmPRQ4+U1CtVnfn604je6Sw37PDEF7pv1zRcXMFw4vk4JDuVHychBd8gfwOmSEmOAqN5sjKhGBxQL1HsTka/D7xXzVREa/FDMTXZbTLoKuf/di7OePBjzGWJBt3JBgnZbq1+D7q/FuuWRpVk+0CHWe2ycsCfnLGtqy+BJCHztKB5cCt+Xe4FOcVyh1UlQxzPov677w7GZsCrv2bGVxnTmbJYf7Uy2FJ04ci7zREzd4FF0h3k+/Bnzb38GD4vR89FRe5ufO7+3uKhvJs3l34XZ9tCnP94uJugj9/DNwj3x45fR/dBfVNk84X7lPcXQ5xfUhj7Lz8xVF5cl/nFyR3lqKfS/qKEi+Bv++PiL1OCHGYZ+fn9IJxHd3aWhz2umkKi6nXo8UTlcKfxkHP+BD1pLfoTxYWyavQq6ytu5jsKu89f0+iQyv4cRyzl3KjcxZzKjtEk2288qjJD1i9SIyzWgknoMHbqmv5Mrwl+du7NHMfozt5pg/3BidUO+kYMa/jgBBOaaMQIbraohJ/AjA9OyjhCB2UxfsO0iKwD1oT1a/ulgt9pWdna9D4u6T2A2Ng+6UpflE093lAYxAQ+oEUYrSR0xZTXoXUQpzRMHsz1ujBs4ElTVDc5yCGRAkUZbGsqxwgvgH/XY5QkZh03yrEAMjkJG6dBGYMdKiEbj9YE0UydIVc6oYEq8ZFs9pnCpysqGIpmYp04Fh+VZ0h0tEGSwbMONliZtw4lTgX/8agQp17M0+A+kJPwIZJpQFVdsUNUw/vPXxESZJ3VbM76tEHw6IgNmnMGIMVzkdmLUVJMkRn5E+8ACzDBYU/aMzIij94PK+O/Q6HdovbsSdGWzWYMA+JPpJm5kg/CxPcbs2liRZkseiMJnywmS4OMRHoIJDLuDDtEKUDrq8Ix4KpIhBXFAwA/raDyviWqYDRdF1bFtTc1XPVfCD4Ydh3xxRje3AiPhyue1ypRI05xhJNEyuaeStnzfb4mCSYn3yOLPbPPwiCZiBsyqJa8vh1jTkOvNwZXV5Obzsri+bI9xOFwvHt4pMpm3QO6fl3EbBRbtOD73gqAtE4V1Wm/LRo94yNbzT9VntFN+SVfVhqJaiM07Q52KrILCFKHjRz/uJgu7FydP+vNusHRprRjCWqL68mt1UU49z/cnu1B1G0GQd0SeFGQrVroPE2exhw+EWOboflFksJFh9G6XbKBfvKxS/uxzfXjOMbhvpvQv/2cs34IPluNfRpxzvO+5f9oQWK12hCqsYc0nkxUruO+H6YFXuODSuNWfGYbeQdo2haG4AXgfvNwVkWU1KMAOwSkl9swqp28HDTpXVvymmq4Gjvi+RAlKm/piLX4waL73d8kjdPEJ6HJy6VeKxMpi8V5vGZ5B9jBlQh2e53oLXvwHgOhTLCAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
