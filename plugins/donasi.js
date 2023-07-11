let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
┌─「 Donasi 」
│ • *Dana:* [${global.pdana}]
│ • *Saweria:* [${global.psaweria}]
│ • *Smartfren:* [${global.ppulsa}]
❏────
`

let you = flaaa.getRandom()

    await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 5000000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: teks,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
