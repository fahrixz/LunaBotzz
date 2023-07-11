import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285769727113', 'FahriXz', true] //masukin nomor lu sama nama lu
['628893729854', 'FahriXz', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6282389924037' //ganti jadi nomor lu
global.packname = 'Lunaa - MD by' 
global.author = '© FahriXz'
global.namebot = '​Lunaa - MD' //Masukin Nama Bot Lu
global.wm = '© Lunaa By FahriXz' //ini wm sticker
global.stickpack = 'Lunaa - MD by'
global.stickauth = '© FahriXz'
// Link Sosmed
global.sig = 'https://Instagram.com/fahri_fr22'
global.sgh = 'https://github.com/fahrixz'
global.sgc = 'https://chat.whatsapp.com/Bug7b2wjHmbL525At41QLO'
// Donasi
global.psaweria = 'https://saweria.co/FahriXz' 
global.ppulsa = '08893729854'
global.pdana = '0889-3729-854'
// Info Wait
global.wait = 'Memuat.......'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
//hiasan
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷꒦'
global.cmenut = '––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊︎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '' //after
global.pmenus = '☃︎' //pembatas menu selector
global.htki = '––––『' //hiasan title kiri
global.htka = '』––––' //hiasan title kanan
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '❃' //hiasan Doang :v
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}
//rpg
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//jangan di ubah cuy
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
