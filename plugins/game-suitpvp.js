let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ā] ššš§š¢šš£š š©šŖ š„šš§š©ššš šš£š©ššØ šš šš£ššššš§ š¤š©š§š*'
let textquien = `*š š¦šŖššš£ š¦šŖššš§ššØ šššØššššš§?\n šš©šš¦šŖšš©š š šŖš£š š„šš§šØš¤š£š*\n\n*āā šššš¢š„š”š¤:*\n${usedPrefix}ppt @tag`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ā] šš š„šš§šØš¤š£š š š”š š¦šŖš š¦šŖššš§ššØ šššØššššš§ ššŖš£ ššØš©š ššŖššš£šš¤ š¤š©š©š š„šš§š©ššš, ššØš„šš§š š š¦šŖš š©šš§š¢šš£š šš ššŖššš§`
let id = 'suit_' + new Date() * 1
let caption = `š® šš¼ššš ššš šš¼ššš š®\n\nāā @${m.sender.split`@`[0]} šæššØšššš š @${m.mentionedJid[0].split`@`[0]} š šš£ šŖš£ š„šššš§š, š„šš„šš” š¤ š©šššš§š `.trim()
let footer = `ā ššØšš§ššš  "aceptar" š„šš§š šššš§š©š\nā ššØšš§ššš "rechazar" š„šš§š š§šššššÆšš§`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ā³ ] šššš¢š„š¤ šš ššØš„šš§š ššš£šš”ššÆššš¤, šš” š„š«š„ šØš ššš£ššš”š¤ š„š¤š§ ššš”š©š šš š§ššØš„šŖššØš©š`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt|pvp)$/i
handler.group = true
handler.game = true
export default handler
