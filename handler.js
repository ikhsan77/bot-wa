require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const scrappers = require('@bochilteam/scraper')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { normalize } = require('path')
const valtor = require('validator')

// Premium Library
const prem = require('./lib/premium')
let dataPrem = require('./database/premium.json')

// Downloader
const kotz = require('kotz-api')
const RA = require('ra-api')
const tod = require('tod-api')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const hxz = require('hxz-api')

// Maker
const maker = require('mumaker')

// ShortUrl
const tinyUrl = require('tinyurl')
const BitlyClient = require('bitly').BitlyClient;

const shannMark = ('© IKHSAN77')

// Waktu
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

// DATABASE
let tebaklagu = db.data.game.tebaklagu = []
let siapaaku = db.data.game.siapaaku = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let asahotak = db.data.game.asahotak = []
let tebakbendera = db.data.game.tebakbendera = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let ytprem = db.data.others.ytprem = []
let beliyt = require('./database/beliyt.json')

module.exports = shann = async (shann, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°▸π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°▸π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        
        // COMMAND
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        
        // INFO
        const pushname = m.pushName || "No Name"
        const botNumber = await shann.decodeJid(shann.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator ? true : prem.checkPremiumUser(m.sender)

        // GROUP
        const groupMetadata = m.isGroup ? await shann.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}

            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}

            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}

            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false	
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
            }
        } catch (err) {
            console.error(err)
        }

        if (!shann.public) {
            if (!m.key.fromMe) return
        }

        if (m.message) {
            shann.readMessages([m.key])
        }

        // Antilink
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
                if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
                let gclink = (`https://chat.whatsapp.com/`+await shann.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
                if (isAdmins) return m.reply(`*maaf kamu admin*`)
                if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
                shann.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        prem.expiredCheck(shann, m)

        global.hit = {}
        if (isCmd) {
            dataCmd = await fetchJson('https://api.countapi.xyz/hit/shann/visits')
            dataCmdHarian = await fetchJson(`https://api.countapi.xyz/hit/shann${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: shann.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })

            messages.key.fromMe = areJidsSameUser(m.sender, shann.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName

            if (m.isGroup) messages.participant = m.sender

            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            shann.ev.emit('messages.upsert', msg)
        }

        if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)

            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }

            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@'+room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
            ${isSurender ? '' : ``}`.trim()
        
            shann.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }, mentions: room.terjawab}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (('caklontong'+m.chat in caklontong) && isCmd) {
            kuis = true
            jawaban = caklontong['caklontong'+m.chat]
            deskripsi = caklontong_desk['caklontong'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply('*Benar!*')
                delete caklontong['caklontong'+m.chat]
                delete caklontong_desk['caklontong'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('tebaklagu'+m.chat in tebaklagu) && isCmd) {
            kuis = true
            jawaban = tebaklagu['tebaklagu'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebaklagu['tebaklagu'+m.chat]
            } else {
                return m.reply('*Salah!*')
            } 
        }

        if (('asahotak'+m.chat in asahotak) && isCmd) {
            kuis = true
            jawaban = asahotak['asahotak'+m.chat]['answer'].toLowerCase()

            if (budy.toLowerCase() == jawaban) {
                await m.reply('*Benar!*')
                delete asahotak['asahotak'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }
        
        if (('tebakbendera'+m.chat in tebakbendera) && isCmd) {
            kuis = true
            jawaban = tebakbendera['tebakbendera'+m.chat]['answer'].toLowerCase()

            if (budy.toLowerCase() == jawaban) {
                await m.reply('*Benar!*')
                delete tebakbendera['tebakbendera'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('siapaaku'+m.chat in siapaaku) && isCmd) {
            kuis = true
            jawaban = siapaaku['siapaaku'+m.chat]['answer'].toLowerCase()

            if (budy.toLowerCase() == jawaban) {
                await m.reply('*Benar!*')
                delete siapaaku['siapaaku'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete kuismath[m.sender.split('@')[0]]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('tebakgambar'+m.chat in tebakgambar) && isCmd) {
            kuis = true
            jawaban = tebakgambar['tebakgambar'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebakgambar['tebakgambar'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('tebakkata'+m.chat in tebakkata) && isCmd) {
            kuis = true
            jawaban = tebakkata['tebakkata'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebakkata['tebakkata'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('tebakkalimat'+m.chat in tebakkalimat) && isCmd) {
            kuis = true
            jawaban = tebakkalimat['tebakkalimat'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebakkalimat['tebakkalimat'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }

        if (('tebaklirik'+m.chat in tebaklirik) && isCmd) {
            kuis = true
            jawaban = tebaklirik['tebaklirik'+m.chat]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebaklirik['tebaklirik'+m.chat]
            } else {
                return m.reply('*Salah!*')
            }
        }
	    
	    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Benar!*`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else {
                return m.reply('*Jawaban Salah!*')
            }
        }

        // TTT
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1

            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)

            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                }[ok])
                    return !0
            }

            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true

            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }

            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}
            ${arr.slice(0, 3).join('')}
            ${arr.slice(3, 6).join('')}
            ${arr.slice(6).join('')}
            ${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
            ❌: @${room.game.playerX.split('@')[0]}
            ⭕: @${room.game.playerO.split('@')[0]}
            Ketik *nyerah* untuk menyerah dan mengakui kekalahan`

            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat

            if (room.x !== room.o) await shann.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await shann.sendText(room.o, str, m, { mentions: parseMention(str) } )
            
            if (isTie || isWin) {
                delete this.game[room.id]
            }
	    }

        // Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    
        if (roof) {
            let win = ''
            let tie = false

            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    shann.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
                    delete this.suit[roof.id]
                    return !0
                }

                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)

                //delete roof[roof.id].waktu
                shann.sendText(m.chat, `Suit telah dikirimkan ke chat
                @${roof.p.split`@`[0]} dan 
                @${roof.p2.split`@`[0]}
                Silahkan pilih suit di chat masing"
                klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })

                if (!roof.pilih) shann.sendText(roof.p, `Silahkan pilih \n\nBatu\nKertas\nGunting`, m)
                if (!roof.pilih2) shann.sendText(roof.p2, `Silahkan pilih \n\nBatu\nKertas\nGunting`, m)

                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) shann.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        shann.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }

                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }

            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i

            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)

                if (!roof.pilih2) shann.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }

            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)

                if (!roof.pilih) shann.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }

            let stage = roof.pilih
            let stage2 = roof.pilih2

            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true

                shann.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
                @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
                @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
                `.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
	    }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]

            if (!user) continue
            let afkTime = user.afkTime

            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''

            m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        switch (command) {
            case 'afk': {
                m.reply(mess.wait)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text

                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break

            case 'ttc': case 'ttt': case 'tictactoe': {
                if (!m.isGroup) return m.reply(mess.group)

                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}

                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                
                if (room) {
                    m.reply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                    return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                    }[v]
                    })
                    let str = `Room ID: ${room.id}
                    ${arr.slice(0, 3).join('')}
                    ${arr.slice(3, 6).join('')}
                    ${arr.slice(6).join('')}
                    Menunggu @${room.game.currentTurn.split('@')[0]}
                    Ketik *nyerah* untuk menyerah dan mengakui kekalahan`

                    if (room.x !== room.o) await shann.sendText(room.x, str, m, { mentions: parseMention(str) } )
                    await shann.sendText(room.o, str, m, { mentions: parseMention(str) } )
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }

                    if (text) room.name = text

                    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break

            case 'delttc': case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        shann.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        m.reply(`Session TicTacToe🎮 tidak ada`)
                    } else {
                        m.reply('?')
                    }
                } catch (e) {
                    m.reply('rusak')
                }
            }
            break

            case 'suitpvp': case 'suit': {
                if (!m.isGroup) return m.reply(mess.group)

                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000

                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
                
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_
                @${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*
                *Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
                
                this.suit[id] = {
                    chat: await shann.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) shann.sendText(m.chat, `_Waktu suit habis_`, m)

                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            }
            break

            case 'family100': {
                if (!m.isGroup) return m.reply(mess.group)
                if ('family100'+m.chat in _family100) return m.reply('Masih dalam sesi game')

                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()

                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await shann.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break

            case 'caklontong': {
                if ('caklontong'+m.chat in caklontong) return m.reply('Masih dalam sesi game')

                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                if (!anu) return m.reply('server dalam perbaikkan')
                let result = anu[Math.floor(Math.random() * anu.length)]

                shann.sendText(m.chat, `${result.soal}*\n\nWaktu : 2 Menit`, m)
                .then(() => {
                    caklontong['caklontong'+m.chat] = result.jawaban.toLowerCase()
                    caklontong_desk['caklontong'+m.chat] = result.deskripsi
                })

                await sleep(120000)
                if ('caklontong'+m.chat in caklontong) {
                    shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${caklontong['caklontong'+m.chat]}\nDeskripsi : ${caklontong_desk['caklontong'+m.chat]}`, m)
                    delete caklontong['caklontong'+m.chat]
                    delete caklontong_desk['caklontong'+m.chat]
                }
            }
            break

            case 'asahotak': {
                if ('asahotak'+m.chat in asahotak) return m.reply('kamu masih dalam game')

                let anu = await scrappers.asahotak()

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.soal) return m.reply('server dalam perbaikkan')
                if (!anu.jawaban) return m.reply('server dalam perbaikkan')

                m.reply(`${anu.soal}\n\nWaktu: 2 menit`)
                .then(() => {
                    asahotak['asahotak'+m.chat] = {
                        question: anu.soal,
                        answer: anu.jawaban
                    }
                })
                .catch((err) => {return m.reply('terjadi kesalahan')})

                await sleep(120000)
                if ('asahotak'+m.chat in asahotak) {
                    shann.sendText(m.chat, `Waktu habis!\n\nJawaban: ${asahotak['asahotak'+m.chat]['answer']}`, m)
                    delete asahotak['asahotak'+m.chat]
                }
            }
            break
            
            case 'tebakbendera': {
                if ('tebakbendera'+m.chat in tebakbendera) return m.reply('kamu masih dalam game')

                let anu = await scrappers.tebakbendera()

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.img) return m.reply('server dalam perbaikkan')
                if (!anu.name) return m.reply('server dalam perbaikkan')

                shann.sendFileUrl(m.chat, anu.img, `tebak nih, gambar diatas adalah bendera dari negara mana hayoo, waktunya 2 menit doang loh.....`, m)
                .then(() => {
                    tebakbendera['tebakbendera'+m.chat] = {
                        question: anu.img,
                        answer: anu.name
                    }
                })
                .catch((err) => {return m.reply('terjadi kesalahan')})

                await sleep(120000)
                if ('tebakbendera'+m.chat in tebakbendera) {
                    shann.sendText(m.chat, `Waktu habis!\n\nJawaban: ${tebakbendera['tebakbendera'+m.chat]['answer']}`, m)
                    delete tebakbendera['tebakbendera'+m.chat]
                }
            }
            break
            
            case 'truth': {
                let anu = await scrappers.truth()

                if (!anu) return m.reply('server dalam perbaikkan')

                m.reply(anu).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'dare': {
                let anu = await scrappers.dare()

                if (!anu) return m.reply('server dalam perbaikkan')

                m.reply(anu).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'siapakahaku': case 'siapaaku': {
                if ('siapaaku'+m.chat in siapaaku) return m.reply('kamu masih dalam game')

                let anu = await scrappers.siapakahaku()

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.soal) return m.reply('server dalam perbaikkan')
                if (!anu.jawaban) return m.reply('server dalam perbaikkan')

                m.reply(`${anu.soal}\n\n Waktu: 2 Menit`)
                .then(() => {
                    siapaaku['siapaaku'+m.chat] = {
                        question: anu.soal,
                        answer: anu.jawaban
                    }
                })
                .catch((err) => {return m.reply('terjadi kesalahan')})

                await sleep(120000)
                if ('siapaaku'+m.chat in siapaaku) {
                    shann.sendText(m.chat, `Waktu habis!\n\nJawaban: ${siapaaku['siapaaku'+m.chat]['answer']}`, m)
                    delete siapaaku['siapaaku'+m.chat]
                }
            }
            break
            
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
                m.reply(mess.wait)
                if (!m.quoted && !text) return m.reply(`Kirim/reply text`)

                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text

                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            }
            break

            case 'tebak': {
                if (!text) return m.reply(`Example : ${prefix + command} gambar\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik`)

                if (args[0] === "lagu") {
                    if ('tebaklagu'+m.chat in tebaklagu) return m.reply('Masih dalam sesi game')
    
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await shann.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
    
                    shann.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 2 Menit`, msg).then(() => {
                        tebaklagu['tebaklagu'+m.chat] = result.jawaban.toLowerCase()
                    })
    
                    await sleep(120000)
                    if ('tebaklagu'+m.chat) {
                        shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${tebaklagu['tebaklagu'+m.chat]}`, m)
                        delete tebaklagu['tebaklagu'+m.chat]
                    }
                } else if (args[0] === 'gambar') {
                    if ('tebakgambar'+m.chat in tebakgambar) return m.reply('Masih dalam sesi game')

                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]

                    shann.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 2 Menit`, m).then(() => {
                        tebakgambar['tebakgambar'+m.chat] = result.jawaban.toLowerCase()
                    })

                    await sleep(120000)
                    if ('tebakgambar'+m.chat in tebakgambar) {
                        shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${tebakgambar['tebakgambar'+m.chat]}`, m)
                        delete tebakgambar['tebakgambar'+m.chat]
                    }
                } else if (args[0] === 'kata') {
                    if ('tebakkata'+m.chat in tebakkata) return m.reply('Masih dalam sesi game')

                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]

                    shann.sendText(m.chat, `${result.soal}\n\nWaktu : 2 Menit`, m).then(() => {
                        tebakkata['tebakkata'+m.chat] = result.jawaban.toLowerCase()
                    })

                    await sleep(120000)
                    if ('tebakkata'+m.chat in tebakkata) {
                        shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${tebakkata['tebakkata'+m.chat]}`, m)
                        delete tebakkata['tebakkata'+m.chat]
                    }
                } else if (args[0] === 'kalimat') {
                    if ('tebakkalimat'+m.chat in tebakkalimat) return m.reply('Masih dalam sesi game')

                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]

                    shann.sendText(m.chat, `${result.soal}\n\nWaktu : 2 Menit`, m).then(() => {
                        tebakkalimat['tebakkalimat'+m.chat] = result.jawaban.toLowerCase()
                    })

                    await sleep(120000)
                    if ('tebakkalimat'+m.chat in tebakkalimat) {
                        shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${tebakkalimat['tebakkalimat'+m.chat]}`, m)
                        delete tebakkalimat['tebakkalimat'+m.chat]
                    }
                } else if (args[0] === 'lirik') {
                    if ('tebaklirik'+m.chat in tebaklirik) return m.reply('Masih dalam sesi game')

                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]

                    shann.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 2 Menit`, m).then(() => {
                        tebaklirik['tebaklirik'+m.chat] = result.jawaban.toLowerCase()
                    })

                    await sleep(120000)
                    if ('tebaklirik'+m.chat in tebaklirik) {
                        shann.sendText(m.chat, `*Waktu Habis*\n\nJawaban:  ${tebaklirik['tebaklirik'+m.chat]}`, m)
                        delete tebaklirik['tebaklirik'+m.chat]
                    }
                }
            }
            break

            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply('Masih dalam sesi game')

                let { genMath, modes } = require('./src/math')
                if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)

                m.reply(mess.wait)

                let result = await genMath(text.toLowerCase())
                shann.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })

                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break

            case 'jodohku': {
                if (!m.isGroup) return m.reply(mess.group)

                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`

                let ments = [me, jodoh]
                let buttons = [{buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }]
                await shann.sendButtonText(m.chat, buttons, jawab, shannMark, m, {mentions: ments})
            }
            break

            case 'jadian': {
                if (!m.isGroup) return m.reply(mess.group)
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                
                let jawab = `Ciee yang Jadian💖*
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                
                let menst = [orang, jodoh]
                let buttons = [
                    { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                ]
                await shann.sendButtonText(m.chat, buttons, jawab, shannMark, m, {mentions: menst})
            }
            break

            case 'style': case 'styletext': {
                let { styletext } = require('./lib/scraper')
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)

                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.status) return m.reply(anu.message)

                for (let i of anu.result) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }

                m.reply(teks).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'setytprem': {
                if (!isCreator) return
                if (!text) return m.reply('quantity and seller cannot be empty')
                if ((shann.user.name in ytprem)) return m.reply('event sudah pernah dibuat sebelumnya')

                m.reply(mess.wait)

                let qty = args[0]
                let seller = args[1]

                ytprem[shann.user.name] = {
                    qty,
                    seller,
                    email: [],
                    sender: []
                }

                await sleep(1000)
                m.reply('sukses membuat event')
            }
            break

            case 'claimyt': {
                if (!(shann.user.name in ytprem)) return m.reply('Lagi gak bagi-bagi youtube premium bosku.')
                if (!text) return m.reply(`cth ${prefix + command} emailkamu@gmail.com`)

                m.reply(mess.wait)

                let email = text
                var validator = require('email-validator')

                let anu = await validator.validate(email)
                let val = ['gmail.com']
                let isMails = ['emailkamu@gmail.com', '12@gmail.com', 'emailku@gmail.com', 'email@gmail.com']

                let wasMails = isMails.includes(email)

                if (anu === false) return m.reply('invalid email')
                if (!email.split('@')[1].includes(val)) return m.reply('invalid email')
                if (wasMails) return m.reply('masukkan email youtube kamu dengan benar')

                let isMail = ytprem[shann.user.name]['email']
                let isSend = ytprem[shann.user.name]['sender']

                let wasMail = isMail.includes(email)
                let wasSend = isSend.includes(m.sender)

                if (wasMail && wasSend) return m.reply('kamu sudah pernah klaim dievent kali ini.')
                if (wasMail) return m.reply('kamu sudah pernah klaim dievent kali ini.')
                if (wasSend) return m.reply('kamu sudah pernah klaim dievent kali ini.')

                if (`${isMail.length}` === ytprem[shann.user.name]['qty']) return m.reply('kamu terlambat, event sudah selesai.')
		
		        let shannSel = `${email}`
                shann.sendText(`${ytprem[shann.user.name]['seller']+'@s.whatsapp.net'}`, shannSel, m).catch((err) => {return m.reply('terjadi kesalahan')})
                
                ytprem[shann.user.name]['email'].push(email)
                ytprem[shann.user.name]['sender'].push(m.sender)
                
                let shannMsg = `Claim *Youtube Premium* berhasil, proses ini membutuhkan waktu maksimal hingga 1 hari.\n\nJika pesananmu sudah selesai diproses, kamu akan mendapatkan notif pesanan sukses dari nomor ini.\n\nIkuti kami terus agar kamu tidak ketinggalan info menarik selanjutnya.\n\nFacebook: https://bit.ly/3S8oic\nInstagram: https://bit.ly/3ezdFOQ\n\nTerimakasih.`
                
                m.reply(shannMsg)
            }
            break

            case 'doneyt': {
                if (!ytprem[shann.user.name]['seller'].includes(m.sender.split('@')[0])) return
                if (!(shann.user.name in ytprem)) return m.reply('sedang tidak ada event saat ini')

                m.reply(mess.wait)

                for (let penerima of ytprem[shann.user.name]['sender']) {
                    await sleep(3000)
                    shann.sendMessage(`${penerima}`, {image: {url: 'https://telegra.ph/file/af99e1e804a79d444220f.jpg'}, caption: `Hallo ${penerima.split('@')[0]} Youtube Premium kamu sudah selesai diproses.\n\nSilahkan cek gmail dan klik *Terima Undangan* seperti gambar di atas, lalu ikuti langkah-langkahnya\n\nIkuti kami terus agar kamu tidak ketinggalan info menarik selanjutnya.\n\nFacebook: https://bit.ly/3S8oic\nInstagram: https://bit.ly/3ezdFOQ\n\nTerimakasih.`}, penerima).catch((err) => {return m.reply('terjadi kesalahan')})
                }

                m.reply('done')
                delete ytprem[shann.user.name]
            }
            break

            case 'vote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname} keren`)

                m.reply(mess.wait)

                vote[m.chat] = [q, [], []]
                
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 SETUJU 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 TIDAK SETUJU 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`

                let buttonsVote = [
                    {buttonId: `${prefix}upvote`, buttonText: {displayText: 'SETUJU'}, type: 1},
                    {buttonId: `${prefix}devote`, buttonText: {displayText: 'TIDAK SETUJU'}, type: 1}
                ]
    
                let buttonMessageVote = {
                    text: teks_vote,
                    footer: shannMark,
                    buttons: buttonsVote,
                    headerType: 1
                }
                shann.sendMessage(m.chat, buttonMessageVote)
            }
            break

            case 'upvote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)

                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                
                if (wasVote) return m.reply('Kamu Sudah Vote')
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 SETUJU 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 TIDAK SETUJU 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`

                let buttonsUpvote = [
                    {buttonId: `${prefix}upvote`, buttonText: {displayText: 'SETUJU'}, type: 1},
                    {buttonId: `${prefix}devote`, buttonText: {displayText: 'TIDAK SETUJU'}, type: 1}
                ]
    
                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: shannMark,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                 }
                shann.sendMessage(m.chat, buttonMessageUpvote)
            }
            break

            case 'devote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)

                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)

                if (wasVote) return m.reply('Kamu Sudah Vote')
                
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 SETUJU 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 TIDAK SETUJU 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`

                let buttonsDevote = [
                    {buttonId: `${prefix}upvote`, buttonText: {displayText: 'SETUJU'}, type: 1},
                    {buttonId: `${prefix}devote`, buttonText: {displayText: 'TIDAK SETUJU'}, type: 1}
                ]
    
                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: shannMark,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                shann.sendMessage(m.chat, buttonMessageDevote)
            }
            break
                     
            case 'cekvote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
                teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 SETUJU 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 TIDAK SETUJU 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote
©${shann.user.id}
`
            shann.sendTextWithMentions(m.chat, teks_vote, m)
            }
            break

            case 'deletevote': case'delvote': case 'hapusvote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)

                m.reply(mess.wait)

                delete vote[m.chat]
                m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
            break

            case 'listonline': case 'liston': {
                m.reply(mess.wait)

                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
             
                shann.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
            }
            break

            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
                if (!quoted) return m.reply(`*Kirim/reply media dengan caption ${prefix + command}`)
                
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await shann.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('durasi maksimal 9 detik')
                    let media = await quoted.download()
                    let encmedia = await shann.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`*send/reply media dengan caption* ${prefix + command}\ndurasi maksimal 9 detik`)
                }
            }
            break

            case 'ebinary': {
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)

                m.reply(mess.wait)

                let { eBinary } = require('./lib/binary')
                let eb = await eBinary(text)
                m.reply(eb)
            }
            break
            
            case 'dbinary': {
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)

                m.reply(mess.wait)

                let { dBinary } = require('./lib/binary')
                let db = await dBinary(text)
                m.reply(db)
            }
            break

            case 'emojimix': {
                if (!text) return m.reply(`cth: ${prefix + command} 😅+🤔`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return m.reply(`Cth: ${prefix + command} 😅+🤔`)
                if (!emoji2) return m.reply(`Cth: ${prefix + command} 😅+🤔`)

                m.reply(mess.wait)
                
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await shann.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
            break

            case 'ttp': {
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)

                m.reply(mess.wait)

                let anu = await xfar.maker.ttp(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('terjadi kesalahan')
                if (!anu.result) return m.reply('terjadi kesalahan')

                shann.sendMedia(m.chat, anu.result, 'shann', 'done', m, {asSticker: true}).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'attp': {
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)

                m.reply(mess.wait)

                let anu = await xfar.maker.attp(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('terjadi kesalahan')
                if (!anu.result) return m.reply('terjadi kesalahan')

                shann.sendMedia(m.chat, anu.result, 'shann', 'done', m, {asSticker: true}).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} ${pushname}|Keren`
                if (!/image/.test(mime)) return m.reply(respond)
                if (!text) return m.reply(respond)

                m.reply(mess.wait)

                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                
                let { TelegraPh } = require('./lib/uploader')
                let mee = await shann.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(mee)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
                let awikwok = await shann.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(awikwok)
            }
            break
            
            case 'toimage': case 'toimg': {
                if (!quoted) return m.reply('Reply image')
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption ${prefix + command}`)

                m.reply(mess.wait)
            
                let media = await shann.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
            
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('terjadi kesalahan')
                    let buffer = fs.readFileSync(ran)
                    shann.sendMessage(m.chat, { image: buffer }, { quoted: m }).catch((err) => {return m.reply('terjadi kesalahan')})
                    fs.unlinkSync(ran)
                })
            }
            break

            case 'tomp4': case 'tovideo': {
                if (!quoted) return m.reply('Reply image')
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption ${prefix + command}`)

                m.reply(mess.wait)
                
                let { webp2mp4File } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                
                await shann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            
            case 'toaud': case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)
                if (!quoted) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)

                m.reply(mess.wait)
                
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                
                shann.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break

            case 'tomp3': {
                if (/document/.test(mime)) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)
                if (!quoted) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)

                m.reply(mess.wait)
            
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
            
                shann.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${shann.user.name}.mp3`}, { quoted : m })
            }
            break

            case 'tovn': case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)
                if (!quoted) return m.reply(`Kirim/reply media dengan caption ${prefix + command}`)

                m.reply(mess.wait)
            
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
            
                shann.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break

            case 'togif': {
                if (!quoted) return m.reply('Reply image')
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption ${prefix + command}*`)

                m.reply(mess.wait)
		        
                let { webp2mp4File } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
            
                await shann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            
	        case 'tourl': {
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                m.reply(mess.wait)
                
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)

                    if (!anu) return m.reply('server dalam perbaikkan')

                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)

                    if (!anu) return m.reply('server dalam perbaikkan')
                    if (!anu.url) return m.reply('server dalam perbaikkan')
                    m.reply(util.format(anu.url))
                }
                
                await fs.unlinkSync(media)
            }
            break

            case 'toqr': {
                if (!text) return m.reply('text cannot be empty')

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/qrcode?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'readqr': {
                if (!/image/.test(mime)) return m.reply(`kirim/reply gambar dengan caption ${prefix + command}`)

                let {TelegraPh} = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                m.reply(mess.wait)

                let urlImg = await TelegraPh(media)
                let anu = await fetchJson(api('lolhuman', '/read-qr', {img: urlImg}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('gagal')

                m.reply(anu.result).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'nulis': {
                if (!text) return m.reply('text cannot be empty')

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/nulis?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'pshadow': {
                if (!text) return m.reply(`cth: ${prefix + command} SHANNBot`)

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'pcup': {
                if (!text) return m.reply(`cth: ${prefix + command} SHANNBot`)

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/photooxy1/cup?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'pcup2': {
                if (!text) return m.reply(`cth: ${prefix + command} SHANNBot`)

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/photooxy1/cup1?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'psmoke': {
                if (!text) return m.reply(`cth: ${prefix + command} SHANNBot`)

                m.reply(mess.wait)
                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'logotiktok': {
                if (!text) return m.reply(`cth: ${prefix + command} text1|text2`)

                m.reply(mess.wait)

                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=SHANNBot-APIKEY&text1=${m1}&text2=${m2}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'galaxy': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'hologram': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/hologram3d?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'wetglass': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'watercolor': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'logoneon': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/greenneon?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'greenbush': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/greenbush?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'multicolor3d': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'logoanonym': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'logogaming': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'logofps': {
                if (!text) return m.reply(`cth: ${prefix + command} text`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'removebg': {
                if (!quoted) return m.reply('kirim/reply image dengan caption #removebg')
                if (!/image/.test(mime)) return m.reply('kirim/reply image dengan caption #removebg')
                if (/webp/.test(mime)) return m.reply('kirim/reply image dengan caption #removebg')

                m.reply(mess.wait)

                let {TelegraPh} = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {document: {url: `https://api.lolhuman.xyz/api/removebg?apikey=SHANNBot-APIKEY&img=${anu}`}, mimetype: 'image/png', fileName: 'removebg.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'flip': {
                if (!quoted) return m.reply('kirim/reply image dengan caption flip')
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/flip?apikey=SHANNBot-APIKEY&img=${anu}`}, caption: 'done', mimetype: 'image/png', fileName: 'flip.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'wasted': {
                if (!quoted) return m.reply('kirim/reply image dengan caption wasted')
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/wasted?apikey=SHANNBot-APIKEY&img=${anu}`}, caption: 'done', mimetype: 'image/png', fileName: 'wasted.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'pencil': case 'pencils': case 'pensil': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=SHANNBot-APIKEY&img=${anu}`}, caption: 'done', mimetype: 'image/png', fileName: 'pencils.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'fisheye': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/fisheye?apikey=SHANNBot-APIKEY&img=${anu}`}, caption: 'done', mimetype: 'image/png', fileName: 'fisheye.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'rotate': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')
                if (!text) return m.reply(`cth: ${prefix + command} 180`)

                m.reply(mess.wait)

                const rotateNya = require('validator')
                let hasilRotate = await rotateNya.isNumeric(text)

                if (!hasilRotate) return m.reply(`cth: ${prefix + command} 180`)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/rotate?apikey=SHANNBot-APIKEY&img=${anu}&rotate=${text}`}, caption: 'done', mimetype: 'image/png', fileName: 'fisheye.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'roundimg': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: `https://api.lolhuman.xyz/api/editor/roundimage?apikey=SHANNBot-APIKEY&img=${anu}`}, caption: 'done', mimetype: 'image/png', fileName: 'rounded.png'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'trigger': case 'triggered': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')

                m.reply(mess.wait)

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendFileUrl(m.chat, `https://api.lolhuman.xyz/api/editor/triggered?apikey=SHANNBot-APIKEY&img=${anu}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'totext': {
                if (!quoted) return m.reply(`kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply('image only')

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                m.reply(mess.wait)
                
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    let teks = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=SHANNBot-APIKEY&img=${anu}`)
                    m.reply(teks.result).catch((err) => {return m.reply('terjadi kesalahan')})
                } else {
                    return m.reply('Hanya gambar')
                }
                
                await fs.unlinkSync(media)
            }
            break

            case 'google': {
                if (!text) return m.reply(`Cth: ${prefix + command} ${pushname}`)
                let google = require('google-it')

                m.reply(mess.wait)

                google({'query': text}).then(res => {
                    let teks = `Google Search From : ${text}\n\n`
                    
                    for (let g of res) {
                        teks += `⭔ *Title* : ${g.title}\n`
                        teks += `⭔ *Description* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    } 

                    m.reply(teks)
                })
            }
            break

            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
                if (!text) return m.reply(`Example : ${prefix + command} ${global.packname}`)

                m.reply(mess.wait)
                
                let link
                if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
                if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
                if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
                if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
                if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
                if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
                if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
                if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
                if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
                if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
                if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
                if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
                if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
                if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
                if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
                if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
                if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
                if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
                if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
                if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
                if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
                if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
                if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
                if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
                if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
                if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
                if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
                if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
                if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
                if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
                if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
                if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
                if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
                if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
                if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
                if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
                if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
                if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
                if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
                if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
                if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
                if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
                if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
                if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
                if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
                if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
                if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
                if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
                if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
                if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
                if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
                if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
                if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
                if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
                if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
                if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
                if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
                if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
                if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
                if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
                if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
                if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
                if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
                if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
                
                let anu = await maker.textpro(link, text)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendMessage(m.chat, {image: {url: anu}, caption: `done`}, { quoted: m }).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'gimage': {
                if (!text) return m.reply(`cth: ${prefix + command} ichigo kurosaki`)

                m.reply(mess.wait)

                let anu = await scrappers.googleImage(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('image not found')

                let result = anu[Math.floor(Math.random() * anu.length)]
                if (!result) return m.reply('image not found')

                shann.sendFileUrl(m.chat, result, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'webtoons': {
                if (!text) return m.reply(`cth: ${prefix + command} love`)

                m.reply(mess.wait)

                let anu = await xfar.search.webtoons(text)
                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\nJudul: ${i.judul}\Like: ${i.like}\nCreator: ${i.creator}\nGenre: ${i.genre}\nLink: ${i.url}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'mangatoons': {
                if (!text) return m.reply(`cth: ${prefix + command} love`)

                m.reply(mess.wait)

                let anu = await xfar.search.mangatoons(text)
                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\nJudul: ${i.judul}\nGenre: ${i.genre}\nLink: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'noveltoons': {
                if (!text) return m.reply(`cth: ${prefix + command} love`)

                m.reply(mess.wait)

                let anu = await xfar.search.noveltoons(text)
                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\nJudul: ${i.judul}\nLike: ${i.like}\nGenre: ${i.genre}\nLink: ${i.url}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'film': {
                if (!text) return m.reply(`cth: ${prefix + command} love`)

                m.reply(mess.wait)

                let anu = await xfar.search.film(text)
                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\nJudul: ${i.judul}\nQuality: ${i.quality}\nType: ${i.type}\nRelease: ${i.upload}\nLink: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'wallpaper': {
                if (!text) return m.reply(`cth: ${prefix + command} ichigo kurosaki`)

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/wallpaper2', {query: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('image not found')

                shann.sendImage(m.chat, anu.result, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'searchbijak': {
                if (!text) return m.reply('query cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/searchbijak', {query: text}, m))
                
                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('query not found')

                let shannMsg = ''
                for (let i of anu.result) {
                    shannMsg += `Quote: ${i.quote}\nBy: ${i.author}\n\n`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'unsplash': {
                if (!text) return m.reply('query cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/unsplash', {query: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('query not found')

                for (let i of anu.result) {
                    await sleep(3000)
                    shann.sendFileUrl(m.chat, i, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
                }
            }
            break

            case 'wiki': case 'wikipedia': {
                if (!text) return m.reply(`cth: ${prefix + command} tahu`)

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/wiki', {query: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('query not found')

                m.reply(anu.result).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'translate': {
                if (!text) return m.reply(`cth: ${prefix + command} id|Good Morning`)

                m.reply(mess.wait)

                var mon = args.join(' ')
                var m1 = mon.split('|')[0]
                var m2 = mon.split('|')[1]
                
                let anu = await fetchJson(api('lolhuman', `/translate/auto/${m1}`, {text: m2}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('gagal')

                m.reply(`Translate: ${anu.result.translated}\nPronunciation: ${anu.result.pronunciation}`).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'chord': {
                if (!text) return m.reply(`cth: ${prefix + command} melukis senja`)

                m.reply(mess.wait)

                let anu = await xfar.search.chord(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('song not found')

                m.reply(anu.chord).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'lirik': {
                if (!text) return m.reply('cth: #lirik melukis senja')

                m.reply(mess.wait)

                let anu = await scrappers.lyrics(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.lyrics) return m.reply('song not found')

                m.reply(anu.lyrics).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'hoax': {
                let anu = await tod.turnbackhoax()

                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Title: ${i.title}\n`
                    shannMsg += `⭔ Upload: ${i.date}\n`
                    shannMsg += `⭔ Deskripsi: ${i.desc}\n`
                    shannMsg += `⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'kompasnews': {
                let anu = await tod.kompasnews()

                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Title: ${i.title}\n`
                    shannMsg += `⭔ Upload: ${i.date}\n`
                    shannMsg += `⭔ Deskripsi: ${i.desc}\n`
                    shannMsg += `⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'jadwalbola': {
                let anu = await xfar.information.jadwalbola()

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                m.reply(mess.wait)

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Jadwal: ${i.jadwal}\n`
                    shannMsg += `⭔ Tanggal: ${i.tanggal}\n`
                    shannMsg += `⭔ Link: ${i.url}`
                }

                m.reply(shannMsg)
            }
            break
            
            case 'jadwaltv': {
                let anu = await xfar.information.jadwaltv()

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                m.reply(mess.wait)

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Acara: ${i.acara}\n`
                    shannMsg += `⭔ Channel: ${i.channel}\n`
                    shannMsg += `⭔ Jam: ${i.jam}\n`
                    shannMsg += `⭔ Link: ${i.source}`
                }

                m.reply(shannMsg)
            }
            break
            
            case 'jalantikus': {
                let anu = await tod.jalantikus()

                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Title: ${i.title}\n`
                    shannMsg += `⭔ Upload: ${i.date}\n`
                    shannMsg += `⭔ Category: ${i.category}\n`
                    shannMsg += `⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'sfilesearch': {
                if (!text) return m.reply(`cth: ${prefix + command} virtex`)

                let anu = await tod.sfilesearch(text)

                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Title: ${i.name}\n`
                    shannMsg += `⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'happymod': {
                if (!text) return m.reply(`cth: ${prefix + command} canva`)

                let anu = await tod.happymod(text)

                if (!anu) return m.reply('server dalam perbaikkan')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n`
                    shannMsg += `⭔ Title: ${i.name}\n`
                    shannMsg += `⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'beasiswa': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/indbeasiswa?apikey=SHANNBot-APIKEY')

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('data not found')

                let shannMsg = '「 SUKSES MENDAPATKAN DATA 」'
                for (let i of anu.result) {
                    shannMsg += `\n\n──────────────────────\n\nTitle: ${i.title}\nLink: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'couple': case 'ppcp': {
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]

                m.reply(mess.wait)
            
                shann.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m }).catch(e => m.reply('terjadi kesalahan saat mengirim media'))
                shann.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m }).catch(e => m.reply('terjadi kesalahan saat mengirim media'))
            }
	        break

            case 'patrick': {
                let anu = await xfar.search.stickersearch('patrick')
                if (!anu) return m.reply('server sedang dalam perbaikkan')

                let result = anu.sticker_url[Math.floor(Math.random() * anu.length)]
                if (!result) return m.reply('not found')

                m.reply(mess.wait)
                
                let res = await axios.head(result)
                let mime = res.headers['content-type']

                if (mime.split("/")[1] === "gif") {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'mp4') {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'webp') {
                    shann.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    return m.reply('terjadi kesalahan saat mengirim media')
                }
            }
            break
            
            case 'bucinstick': {
                let anu = await xfar.search.stickersearch('bucin')
                if (!anu) return m.reply('server sedang dalam perbaikkan')

                let result = anu.sticker_url[Math.floor(Math.random() * anu.length)]
                if (!result) return m.reply('not found')

                m.reply(mess.wait)
                
                let res = await axios.head(result)
                let mime = res.headers['content-type']

                if (mime.split("/")[1] === "gif") {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'mp4') {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'webp') {
                    shann.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    return m.reply('terjadi kesalahan saat mengirim media')
                }
            }
            break
            
            case 'dogestick': {
                let anu = await xfar.search.stickersearch('anjing doge')
                if (!anu) return m.reply('server sedang dalam perbaikkan')

                let result = anu.sticker_url[Math.floor(Math.random() * anu.length)]
                if (!result) return m.reply('not found')

                m.reply(mess.wait)
                
                let res = await axios.head(result)
                let mime = res.headers['content-type']

                if (mime.split("/")[1] === "gif") {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'mp4') {
                    shann.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'webp') {
                    shann.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    return m.reply('terjadi kesalahan saat mengirim media')
                }
            }
            break
            
            case 'amongus': {
                let res = await axios.head('https://api.lolhuman.xyz/api/sticker/amongus?apikey=SHANNBot-APIKEY')
                let mime = res.headers['content-type']

                if (mime.split("/")[1] === "gif") {
                    shann.sendVideoAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/amongus?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'mp4') {
                    shann.sendVideoAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/amongus?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'webp') {
                    shann.sendImageAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/amongus?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    return m.reply('terjadi kesalahan saat mengirim media')
                }
            }
            break
            
            case 'gawrgura': {
                let res = await axios.head('https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=SHANNBot-APIKEY')
                let mime = res.headers['content-type']

                if (mime.split("/")[1] === "gif") {
                    shann.sendVideoAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'mp4') {
                    shann.sendVideoAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else if (mime.split('/')[1] === 'webp') {
                    shann.sendImageAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=SHANNBot-APIKEY', m, { packname: global.packname, author: global.author }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    return m.reply('terjadi kesalahan saat mengirim media')
                }
            }
            break

            case 'randwp': {
                shann.sendFileUrl(m.chat, 'https://api.lolhuman.xyz/api/random2/wallpaper?apikey=SHANNBot-APIKEY', 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'randcry': {
                shann.sendFileUrl(m.chat, 'https://api.lolhuman.xyz/api/random/cry?apikey=SHANNBot-APIKEY', 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break
            
            case 'randkiss': {
                shann.sendFileUrl(m.chat, 'https://api.lolhuman.xyz/api/random/kiss?apikey=SHANNBot-APIKEY', 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'puisi': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/puisi?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server sedang dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(anu.result)
            }
            break

            case 'pantun': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/pantun?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(anu.result)
            }
            break

            case 'katabucin': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/bucin?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(anu.result)
            }
            break

            case 'quotes': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/quotes?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(`${anu.result.quote}\n\nby: ${anu.result.by}`)
            }
            break

            case 'quote': {
                if (!text) return m.reply(`cth: ${prefix + command} dilan\n\nPilih salah satu option:\n1. Dilan\n2. Islami\n3. Anime\n4. Image`)

                if (text === 'anime') {
                    let {quotesAnime} = require('./lib/scraper')
                    let anu = await quotesAnime()

                    if (!anu) return m.reply('server dalam perbaikkan')
                    if (!anu.status) return m.reply(anu.message)
                    
                    let shannMsg = ''

                    for (let i of anu.result) {
                        shannMsg += `Karakter: ${i.karakter}\nAnime: ${i.anime}\nEpisode: ${i.episode}\nQuotes: ${i.quotes}\n\n`
                    }
                    m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
                } else if (text === 'dilan') {
                    let anu = await fetchJson('https://api.lolhuman.xyz/api/quotes/dilan?apikey=SHANNBot-APIKEY')

                    if (!anu) return m.reply('server dalam perbaikkan')
                    if (anu.status !== 200) return m.reply('data not found')

                    m.reply(anu.result).catch((err) => {return m.reply('terjadi kesalahan')}) 
                } else if (text === 'islami') {
                    let anu = await fetchJson('https://api.lolhuman.xyz/api/quotes/islami?apikey=SHANNBot-APIKEY')

                    if (!anu) return m.reply('server dalam perbaikkan')
                    if (anu.status !== 200) return m.reply('data not found')

                    m.reply(anu.result).catch((err) => {return m.reply('terjadi kesalahan')}) 
                } else if (text === 'image') {
                    m.reply(mess.wait)
                    shann.sendFileUrl(m.chat, 'https://api.lolhuman.xyz/api/random/quotesimage?apikey=SHANNBot-APIKEY','done', m).catch((err) => {return m.reply('terjadi kesalahan')})
                } else {
                    m.reply(`cth: ${prefix + command} dilan\n\nPilih salah satu option:\n1. Dilan\n2. Islami\n3. Anime\n4. Image`)
                }
            }
            break

            case 'faktaunik': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/faktaunik?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(anu.result)
            }
            break
            
            case 'cerpen': {
                let anu = await RA.RandomCerpen()

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('terjadi kesalahan, silahkan ulangi')

                let shannMsg = `Judul: ${anu.data.judul}\nCreator: ${anu.result.creator}\n\n${anu.data.cerita}`
                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'katabijak': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/random/katabijak?apikey=SHANNBot-APIKEY')

                m.reply(mess.wait)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply(anu.message)

                m.reply(anu.result)
            }
            break

            case 'menfes': case 'menfess': {
		        if (m.isGroup) return m.reply('private chat only')
            	if (!text) return m.reply(`cth: ${prefix + command} 6282xxxxx|nama samaran|pesan`)

                m.reply(mess.wait)

                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                
                const valHp = require('validasi-nomor-telpon')

                let hpNya = await valHp.validasiNomor(m1)
                if (hpNya === 'awali dengan 62') return m.reply('pastikan nomor hp berawalan 62')

                let isHp = await valtor.isNumeric(m1, 'ar')
                if (!isHp) return m.reply(`nomor tujuan salah, pastikan tidak ada simbol dan spasi pada nomor tujuan`)

                if (!m2) return m.reply(`cth: ${prefix + command} 6282xxxxx|nama|pesan`)
                if (!m3) return m.reply(`cth: ${prefix + command} 6282xxxxx|nama|pesan`)

                this.menfess = this.menfess ? this.menfess : {}
                
                let mq1 = m1 + '@s.whatsapp.net'
                let pjtxt = `Hi saya Bot, ${m2} Kirim Pesan Untuk Kamu\n\nIsi Pesan:\n${m3}\n\n_*geser ke kanan untuk membalas >>>*_`

                shann.sendText(m1 + '@s.whatsapp.net', pjtxt)
                .then((ress) => {
                    let id = + new Date
                    this.menfess[id] = {
                        id,
                        a: m.sender,
                        b: m1+'@s.whatsapp.net',
                        state: false,
                        pesan: m3
                    }

                    m.reply('berhasil mengirim pesan')
                })
                .catch((err) => {return m.reply('terjadi kesalahan saat mengirim pesan')})
            }
            break

            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                shann.sendMessage(m.chat, reactionMessage)
            }
            break

            case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                shann.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await shann.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, shannMark, m)
            }
			break

            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await shann.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    return false
                }
                
                m.reply('Ok')
                let other = room.other(m.sender)
                
                if (other) await shann.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                
                delete this.anonymous[room.id]
                
                if (command === 'leave') break
            }
            break

            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                
                this.anonymous = this.anonymous ? this.anonymous : {}
                
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await shann.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, shannMark, m)
                    return false
                }
                
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await shann.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, shannMark, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await shann.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, shannMark, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await shann.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, shannMark, m)
                }
            }
            break
            
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await shann.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    return false
                }
                
                let other = romeo.other(m.sender)
                
                if (other) await shann.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await shann.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, shannMark, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await shann.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, shannMark, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await shann.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, shannMark, m)
                }
            }
            break

            case 'tt': case 'tiktok': case 'tiktoknowm': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await xfar.downloader.tiktok(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.media[1]) return m.reply('invalid url')

                shann.sendMessage(m.chat, {video: {url: anu.media[1].url}, caption: 'done'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'pinterestdl': {
                if (!text) return m.reply('url cannot be emty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                let anu = await xfar.downloader.pinterestdl(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')
                if (anu[0].status !== 200) return m.reply('invalid url')

                let shannUrl = anu[0].url
                
                if (!shannUrl) return m.reply('invalid url')

                shann.sendFileUrl(m.chat, shannUrl, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'ttmp3': case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)
                
                let anu = await xfar.downloader.tiktok(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.media[1]) return m.reply('invalid url')

                shann.sendMessage(m.chat, {audio: {url: anu.media[1].url}, mimetype: 'audio/mpeg'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'fbdl': case 'fb': case 'facebook': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)
                
                let anu = await fetchJson(api('lolhuman', '/facebook', {url: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('invalid Url')

                shann.sendFileUrl(m.chat, anu.result, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'spotify': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/spotify', {url: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('invalid url')

                shann.sendMessage(m.chat, {document: {url: anu.result.link}, mimetype: 'audio/mp3', filename: `${anu.result.title}.mp3`}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'igstory': {
                if (!text) return m.reply('username cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(`https://api.lolhuman.xyz/api/igstory/${text}?apikey=SHANNBot-APIKEY`)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('not found')
                if (!anu.result[0]) return m.reply('not found')

                for ( let i of anu.result ) {
                    await sleep(3000)
                    shann.sendFileUrl(m.chat, i, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                }
            }
            break

            case 'twitter': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)
                
                let anu = await xfar.downloader.twitter(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.quality_720 && !anu.quality_360 && !anu.quality_270) return m.reply('invalid url')

                if (anu.quality_720) return shann.sendFileUrl(m.chat, anu.quality_720, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                if (!anu.quality_720) return shann.sendFileUrl(m.chat, anu.quality_360, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                if (!anu.quality_360) return shann.sendFileUrl(m.chat, anu.quality_270, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'joox': case 'jooxdl': {
                if (!text) return m.reply('title cannot be empty')

                m.reply(mess.wait)
                
                let anu = await fetchJson(api('lolhuman', '/jooxplay', {query: text}, 'apikey'))
                
                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('song not found')
                if (!anu.result.audio[0]) return m.reply('song not found')

                shann.sendMessage(m.chat, { audio: {url: anu.result.audio[0].link}, mimetype: 'audio/mpeg', fileName: anu.result.info.song+'.m4a' }, { quoted: m }).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'instagram': case 'ig': case 'igdl': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await xfar.downloader.instagram(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.media[0]) return m.reply('invalid url')

                if (`${anu.media.length}` === '1') {
                    shann.sendFileUrl(m.chat, anu.media[0].url, `done`, m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                } else {
                    for (let media of anu.media) {
                        shann.sendFileUrl(m.chat, media.url, `done`, m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
                    }
                }
            }
            break

            case 'ytmp4': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/ytvideo2', {url: text}, 'apikey'))
                
                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('invalid url')
                
                shann.sendFileUrl(m.chat, anu.result.link, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'ytmp3': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(api('lolhuman', '/ytaudio', {url: text}, 'apikey'))

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('invalid url')

                shann.sendFileUrl(m.chat, anu.result.link.link, 'done', m).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'tinyurl': {
                if (!text) return m.reply('url cannot be empty')
                if (!budy.match('https://')) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                tinyUrl.shorten(text, function(res, err) {
                    m.reply(res)
                }).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'cuttly': {
                if (!text) return m.reply('url cannot be empty')

                m.reply(mess.wait)

                let anu = await fetchJson(`https://cutt.ly/api/api.php?key=903869065d29e23455ddca922071f4bbeb133&short=${text}`)
                
                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.url.shortLink) return m.reply('invalid url')
                
                m.reply(anu.url.shortLink).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'bitly': {
                if (!text) return m.reply('url cannot be empty')
                const bitly = new BitlyClient('3680511149167fdd418027ff9d13369470616db7');

                m.reply(mess.wait)

                let anu = await bitly.shorten(text)
                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu.link) return m.reply('invalid url')
                
                m.reply(anu.link).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'ssweb': {
                if (!text) return m.reply('url cannot be empty')

                m.reply(mess.wait)
                
                let anu = await xfar.tools.ssweb(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (anu.status !== 200) return m.reply('invalid url')

                shann.sendMessage(m.chat, {image: anu.result, caption: 'done'}, {quoted: m}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim media')})
            }
            break

            case 'carbon': {
                if (!text) return m.reply(`cth: ${prefix + command} print("IKHSAN")|javascript`)

                let mon = args.join(" ")
                let codeNya = mon.split('|')[0]
                let languageNya = mon.split('|')[1]

                if (!codeNya) return m.reply(`cth: ${prefix + command} print("IKHSAN")|javascript`)
                if (!languageNya) return m.reply(`cth: ${prefix + command} print("IKHSAN")|javascript`)

                m.reply(mess.wait)

                shann.sendImage(m.chat, `https://api.lolhuman.xyz/api/carbon?apikey=SHANNBot-APIKEY&code=${codeNya}&language=${languageNya}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'tts': case 'texttospeak': {
                if (!text) return m.reply(`cth: ${prefix + command} id|SHANNBot`)

                let mon = args.join(" ")
                let languageNya = mon.split('|')[0]
                let codeNya = mon.split('|')[1]

                if (!languageNya) return m.reply(`cth: ${prefix + command} id|SHANNBot`)
                if (!codeNya) return m.reply(`cth: ${prefix + command} id|SHANNBot`)

                m.reply(mess.wait)

                shann.sendFileUrl(m.chat, `https://api.lolhuman.xyz/api/gtts/${languageNya}?apikey=SHANNBot-APIKEY&text=${codeNya}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'yugioh': {
                if (!/image/.test(mime)) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)
                if (!text) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)

                let mon = args.join(' ')
                let m1 = mon.split('|')[0]
                let m2 = mon.split('|')[1]
                let m3 = mon.split('|')[2]
                let m4 = mon.split('|')[3]

                if (!m1) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)
                if (!m2) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)
                if (!m3) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)
                if (!m4) return m.reply(`send/reply gambar cengan caption\n\n${prefix + command} title|decs|attack|deff`)

                m.reply(mess.wait)

                let {TelegraPh} = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)

                if (!anu) return m.reply('server dalam perbaikkan')

                shann.sendFileUrl(m.chat, `https://api.lolhuman.xyz/api/yugioh?apikey=SHANNBot-APIKEY&img=${anu}&title=${m1}&desc=${m2}&atk=${m3}&def=${m4}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'hartatahta': {
                if (!text) return m.reply(`cth: ${prefix + command} IKHSAN77`)
                
                m.reply(mess.wait)
                shann.sendFileUrl(m.chat, `https://api.lolhuman.xyz/api/hartatahta?apikey=SHANNBot-APIKEY&text=${text}`, 'done', m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'anime': {
                if (!text) return m.reply('cth: #anime bleach')

                m.reply(mess.wait)

                let anu = await xfar.anime.anime(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n⭔ Judul: ${i.judul}\n⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'character': {
                if (!text) return m.reply('cth: #character ichigo')

                m.reply(mess.wait)

                let anu = await xfar.anime.character(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n⭔ Name: ${i.character}\n⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'manga': {
                if (!text) return m.reply('cth: #manga bleach')

                m.reply(mess.wait)

                let anu = await xfar.anime.manga(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n⭔ Judul: ${i.judul}\n⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'kiryu': {
                if (!text) return m.reply('cth: #kiryu bleach')

                m.reply(mess.wait)

                let anu = await xfar.anime.kiryu(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('server dalam perbaikkan')

                let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
                for (let i of anu) {
                    shannMsg += `\n\n──────────────────────\n\n⭔ Judul: ${i.judul}\n⭔ Manga Status: ${i.manga_status}\n⭔ Last Chapter: ${i.last_chapter}\n⭔ Rating: ${i.ranting}\n⭔ Link: ${i.link}`
                }

                m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break
            
            case 'gcwa': {
                if (!text) return m.reply('query cannot be empty')

                m.reply(mess.wait)

                let anu = await kotz.linkwa(text)

                if (!anu) return m.reply('server dalam perbaikkan')
                if (!anu[0]) return m.reply('group not found')
                
                let teks = `「 SUKSES MENDAPATKAN DATA 」`
                for (let ress of anu) {
                    teks += `\n\n──────────────────────\n\n⭔ Nama: ${ress.nama}\n⭔ Link: ${ress.link}`
                }

                shann.sendText(m.chat, teks, m).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'whatmusic': {
                if (!/audio/.test(mime)) return m.reply('audio only')

                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await shann.downloadAndSaveMediaMessage(quoted)

                m.reply(mess.wait)
                
                if (/audio/.test(mime)) {
                    let urlAudio = await UploadFileUgu(media)
                    let anu = await fetchJson(api('lolhuman', '/musicsearch', {file: urlAudio.url}, 'apikey'))

                    if (!anu) return m.reply('server dalam perbaikkan')
                    if (anu.status !== 200) return m.reply('song not found')

                    let shannMsg = `Title: ${anu.result.title}\nAlbum: ${anu.result.album}\nDurasi: ${anu.result.duration}\nArtist: ${anu.result.artists[0]}\nGenre: ${anu.result.genres[0]}`
                    m.reply(shannMsg).catch((err) => {return m.reply('terjadi kesalahan')})
                } else {
                    return m.reply('audio only')
                }
                
                await fs.unlinkSync(media)
            }
            break

            case 'beliyt': {
                if (!isPremium) return m.reply(mess.premium)
                if (!text) return m.reply(`cth ${prefix + command} emailkamu@gmail.com`)

                let awikwoks = '```'

                let hasilnya = isCreator ? true : prem.editLimitUser(m.chat, 'yt')
                if (!hasilnya) return m.reply('limit anda tidak mencukupi untuk melakukan pembelian ini')

                m.reply(mess.wait)

                let email = text
                var validator = require('email-validator')

                let anu = await validator.validate(email)
                if (!anu) return m.reply('invalid email')

                let val = ['gmail.com']
                if (!email.split('@')[1].includes(val)) return m.reply('invalid email')
                
                let isMails = ['emailkamu@gmail.com', '12@gmail.com', 'emailku@gmail.com', 'email@gmail.com', 'wkwk@gmail.com', 'test@gmail.com']
                let wasMails = isMails.includes(email)
                if (wasMails) return m.reply('masukkan email youtube kamu dengan benar')

                shann.sendText(`6285781183473@s.whatsapp.net`, `「 TRANSAKSI PENDING 」\n\n${awikwoks}Email: ${email + awikwoks}\n${awikwoks}User: @${m.chat.split('@')[0] + awikwoks}\n\n_Segera selesaikan pesanan, agar hidupmu lebih santai_`, '', {mentions: [m.chat]}).catch((err) => {return m.reply('terjadi kesalahan')})
                
                let obj = {email, status: 'waiting', id: m.sender}
                beliyt.push(obj)
                
                fs.writeFileSync('./database/beliyt.json', JSON.stringify(beliyt))

                shann.sendText(m.chat, `「 TRANSAKSI PENDING 」\n\n${awikwoks}Email: ${email + awikwoks}\n${awikwoks}User: @${m.chat.split('@')[0] + awikwoks}\n\n_Pesananmu akan segera kami proses_`, '', {mentions: [m.chat]}).catch((err) => {return m.reply('terjadi kesalahan')})
            }
            break

            case 'done': {
                let isSeller = isCreator ? true : ['6285781183473@s.whatsapp.net'].includes(m.sender)

                if (!isSeller) return
                if (!text) return m.reply(`cth: ${prefix + command} emailbuyer@gmail.com`)

                let cekEmail = beliyt.find((user) => user.email == text && user.status == 'waiting')
                if (!cekEmail) return m.reply('email not found')

                let awikwoks = '```'
                shann.sendText(cekEmail.id, `「 TRANSAKSI BERHASIL 」\n\n${awikwoks}Email: ${cekEmail.email + awikwoks}\n${awikwoks}Jam: ${moment().tz('Asia/Jakarta').format('HH:mm:ss') + awikwoks}\n${awikwoks}Status: Berhasil${awikwoks}\n\n_Terimakasih Sudah Order!_`).catch((err) => {return m.reply('terjadi kesalahan')})

                cekEmail.status = 'complete'
                fs.writeFileSync('./database/beliyt.json', JSON.stringify(beliyt))

                m.reply('sukses')
            }
            break

            case 'cekprem': {
                if (!isPremium) return m.reply('_Kamu bukan member premium_\n\nIngin berlangganan di SHANNBOT?\n=> #premium')
                if (isCreator) return m.reply('_Kamu adalah owner, tidak perlu beli premium_')

                let cekUser = dataPrem.find((user) => user.id == m.chat)
                if (!cekUser) return m.reply('_Kamu bukan member premium_\n\nIngin berlangganan di SHANNBOT?\n=> #premium')

                let shanMs = require('ms')

                let expiredNya = cekUser.expired - Date.now()
                let shannMsg = `*------「 LIST PREMIUM 」------*\n\nNomer : ${cekUser.id.split('@')[0]}\nLimit : ${cekUser.limit}\nExpired : ${shanMs(expiredNya, {long: true})}`
                m.reply(shannMsg)
            }
            break

            case 'premium': case 'sewa': {
                let shannMsg = `Apa itu premium? yaitu pengguna membayar terlebih dahulu (membeli) untuk dapat mengakses dan memperoleh manfaat dari fitur tertentu.
                
Premium/sewa juga berarti membantu (Support) Creator dalam mengembangkan bot. Jika kamu ingin upgrade ke user premium, silahkan cek info pembayaran dibawah

*STANDART*
=> 15k | 1 bulan
=> 25k | 2 bulan
=> 35k | 3 bulan
=> 45k | 4 bulan

*VIP / PRO*
=> 25k | 1 bulan
=> 45k | 2 bulan
=> 65k | 3 bulan
=> 85k | 4 bulan

Untuk pembelian, kamu bisa langsung melakukan pembayaran melalui link berikut:
=> https://saweria.co/SHANNBot

setelah melakukan pembayaran, kirimkan bukti pembayaran ke #creator dan kirim formulir seperti berikut:
Nama:
Paket:
Nomor yang ingin menjadi premium:

Keterangan:

*STANDART*
1. Kamu bisa mengklaim 10 Youtube Premium untuk 1 bulannya. jadi jika kamu membeli paket 2 bulan, limit yang kamu dapatkan adalah 20
2. Kamu bisa mengakses semua fitur yang ada pada bot, tanpa ada batas penggunaan harian.
3. Kamu bisa mengundang bot untuk bergabung ke group whatsapp kamu

*VIP / PRO*
1. Kamu bisa mengklaim 20 Youtube Premium dan 1 Spotify Premium untuk setiap 1 bulannya. jadi jika kamu membeli paket 2 bulan, limit yang kamu dapatkan adalah 42
2. Kamu bisa mengakses semua fitur yang ada pada bot, tanpa ada batas penggunaan harian.
3. Kamu bisa mengundang bot untuk bergabung ke group whatsapp kamu

INFO
Jika ingin sewa, pastikan sudah fiks order dan semua member wajib paham apa itu bot dan bagaimana cara menggunakannya.`

                m.reply(shannMsg)
            }
            break

            // OWNER ONLY
            case 'addprem': {
                if (!isCreator) return
                if (args.length < 2) return m.reply(`cth: #addprem 6282xxx 30d`);

                let shanMs = require('ms')
                let awikwoks = '```'
                
                let limitYt = 5
                let limitSp = 0
                if (args.length < 3 && args[1] === '30d') {
                    limitYt = 20
                    limitSp = 1
                } else if (args.length < 3 && args[1] === '60d') {
                    limitYt = 40
                    limitSp = 2
                }  else if (args.length < 3 && args[1] === '90d') {
                    limitYt = 60
                    limitSp = 3
                } else if (args.length < 3 && args[1] === '120d') {
                    limitYt = 80
                    limitSp = 4
                } else if (args.length === 3 && args[1] === '30d' && args[2] === 'std') {
                    limitYt = 10
                } else if (args.length === 3 && args[1] === '60d' && args[2] === 'std') {
                    limitYt = 20
                } else if (args.length === 3 && args[1] === '90d' && args[2] === 'std') {
                    limitYt = 10
                } else if (args.length === 3 && args[1] === '120d' && args[2] === 'std') {
                    limitYt = 10
                }

                if (m.mentionedJid.length !== 0) {
		    		for (let i = 0; i < m.mentionedJid.length; i++) {
        				prem.addPremiumUser(m.mentionedJid[0], args[1], limitYt, limitSp)

                        shann.sendText(m.mentionedJid[0], `「 TRANSAKSI BERHASIL 」\n\n${awikwoks}⌛ Durasi: ${shanMs(shanMs(args[1]), {long: true}) + awikwoks}\n${awikwoks}📖 Limit: ${limitYt + '/' + limitSp + awikwoks}\n${awikwoks}⌚ Jam: ${moment().tz('Asia/Jakarta').format('HH:mm:ss') + awikwoks}\n${awikwoks}✨ Status: Berhasil${awikwoks}\n\n_Terimakasih @${m.mentionedJid[0].split("@")[0]} Sudah Order!_`, '',{mentions: [m.mentionedJid[0]]}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim pesan ke penerima, tapi akun dia udh premium.')})
                    }

                    m.reply('suskes menambahkan list')
                } else {
                    let nomorNya = args[0] + "@s.whatsapp.net"
	    			prem.addPremiumUser(nomorNya, args[1], limitYt, limitSp)

    				shann.sendText(nomorNya, `「 TRANSAKSI BERHASIL 」\n\n${awikwoks}⌛ Durasi: ${shanMs(shanMs(args[1]), {long: true}) + awikwoks}\n${awikwoks}📖 Limit: ${limitYt + '/' + limitSp + awikwoks}\n${awikwoks}⌚ Jam: ${moment().tz('Asia/Jakarta').format('HH:mm:ss') + awikwoks}\n${awikwoks}✨ Status: Berhasil${awikwoks}\n\n_Terimakasih @${nomorNya.split("@")[0]} Sudah Order!_`, '',{mentions: [nomorNya]}).catch((err) => {return m.reply('terjadi kesalahan saat mengirim pesan ke penerima, tapi akun dia udh premium.')})
                    m.reply('sukses menambahkan list')
                }
            }
            break

            case 'delprem': {
				if (!isCreator) return
                if (args.length < 1) return reply(`cth: #delprem 62xxxx`)

                let awikwoks = '```'
	
                if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						prem.deletePremiumUser(shann, m.mentionedJid[i])

                        shann.sendMessage(m.chat, {text: `${awikwoks}Sukses menghapus status premium @${m.mentionedJid[i] + awikwoks}`, mentions: [m.mentionedJid[i]]}, {quoted: m})
					}
                } else {
                    prem.deletePremiumUser(args[0] + '@s.whatsapp.net')

                    shann.sendMessage(m.chat, {text: `${awikwoks}Sukses menghapus status premium @${args[0] + awikwoks}`, mentions: [args[0]+'@s.whatsapp.net']}, {quoted: m})
				}
            }
            break

            case 'listprem': {
                if (!isCreator) return
                
                let shanMs = require('ms')

                let txt = `*------「 LIST PREMIUM 」------*`

                if (!dataPrem[0]) return m.reply('tidak ada user premium')
                
                for (let i of dataPrem) {
                    let expiredNya = i.expired - Date.now()
                    txt += `\n\nNomer : ${i.id.split('@')[0]}\n`
                    txt += `Limit : ${i.limit}\n`
                    txt += `Expired : ${shanMs(expiredNya, {long: true})}`
                }

                m.reply(txt)
            }
            break

            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }

                shann.sendMessage(m.chat, reactionMessage)
            }
            break

            case 'join': {
                if (!isPremium) return m.reply(mess.premium)
                if (!text) return m.reply('url cannot be empty')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link invalid!')
                
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await shann.groupAcceptInvite(result).then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
            }
            break

            case 'outgc': {
                if (!isPremium) return m.reply(mess.premium)
                await shann.groupLeave(m.chat)
            }
            break

            case 'setexif': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`Cth: ${prefix + command} Keren|${pushname}`)

                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah`)
            }
            break

            case 'block': {
                if (!isCreator) return m.reply(mess.owner)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.updateBlockStatus(users, 'block').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'unblock': {
                if (!isCreator) return m.reply(mess.owner)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.updateBlockStatus(users, 'unblock').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'setppbot': {
                if (!isCreator) return m.reply(mess.owner)
                if (!quoted) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)
                
                let media = await shann.downloadAndSaveMediaMessage(quoted)
                await shann.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break

            case 'delete': case 'del': {
                if (!m.quoted) return m.reply('false')
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply('Gagal')
                if (!isCreator) return m.reply(mess.owner)

                shann.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

            // ADMIN GROUP ONLY
            case 'group': case 'grup': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                if (args[0] === 'close'){
                    await shann.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await shann.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'antilink': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah aktif sebelumnya*`)
                    db.data.chats[m.chat].antilink = true
                    m.reply(`Antilink aktif`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah nonaktif sebelumnya*`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`Antilink nonaktif`)
                }
            }
            break

            case 'mute': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`Sudah aktif sebelumnya`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${shann.user.name} telah dimute`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`Sudah nonaktif sebelumnya`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${shann.user.name} telah diunmute`)
                }
            }
            break

            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)

                let response = await shann.groupInviteCode(m.chat)
                shann.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break

            case 'tagall': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                   teks += `⭔ @${mem.id.split('@')[0]}\n`
                }

                console.log(participants.map(a => a.id))
                shann.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
            break  

            case 'hidetag': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                shann.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!quoted) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/reply image dengan caption ${prefix + command}`)

                let media = await shann.downloadAndSaveMediaMessage(quoted)
                await shann.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break

            case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) return m.reply('Text ?')

                await shann.groupUpdateSubject(m.chat, text).then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) return m.reply('Text ?')

                await shann.groupUpdateDescription(m.chat, text).then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'kick': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'add': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'promote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'demote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await shann.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Done')).catch((err) => m.reply('Failed'))
            }
            break

            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
                let set
                
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                    m.reply(mess.wait)
                
                    let media = await shann.downloadAndSaveMediaMessage(quoted)
                    let ran = getRandom('.mp3')
                
                    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        
                        if (err) return m.reply(err)
                        
                        let buff = fs.readFileSync(ran)
                        
                        shann.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m }).catch((err) => {return m.reply('terjadi kesalahan')})
                        
                        fs.unlinkSync(ran)
                    })
                } else return m.reply(`reply audio dengan caption ${prefix + command}`)
            }
            break

            // CONTACT OWNER
            case 'creator': {
                shannMsg = `Perkenalkan saya *Fajar Khairul Ikhsan*, Saya seorang Laki-laki yang suka mengeksplorasi diri sendiri di bidang Teknologi.

Berinovasi dalam memecahkan masalah melalui program kode sangat menyenangkan dan menantang.

*Instagram:* @shannbot.ofc
*Saweria:* https://saweria.co/SHANNBot
*Req Fitur?* https://wa.me/6285781183473`
                m.reply(shannMsg)
            }
            break

            // MENU BOT
            case 'allmenu': {
                let ownerMsg = isCreator ? `\n┏━━⬣ *Menu Owner*
┃
┃⬡ ${prefix}block @user
┃⬡ ${prefix}join [link]
┃⬡ ${prefix}outgc
┃⬡ ${prefix}react [emoji]
┃⬡ ${prefix}setexif [package]|[author]
┃⬡ ${prefix}setppbot
┃⬡ ${prefix}unblock @user
┗━⬣` : ``
                let groupMsg = m.isGroup ? `\n┏━━⬣ *Menu Grup*
┃
┃⬡ ${prefix}add @user
┃⬡ ${prefix}antilink [on/off]
┃⬡ ${prefix}demote @user
┃⬡ ${prefix}hidetag [text]
┃⬡ ${prefix}linkgroup
┃⬡ ${prefix}setppgc [image]
┃⬡ ${prefix}setname [text]
┃⬡ ${prefix}setdesc [text]
┃⬡ ${prefix}group [option]
┃⬡ ${prefix}kick @user
┃⬡ ${prefix}tagall [text]
┃⬡ ${prefix}mute [on/off]
┃⬡ ${prefix}promote @user
┗━⬣` : ``
                let shannMsg = `┏━━⬣ *Menu Premium*
┃
┃⬡ ${prefix}beliyt
┃⬡ ${prefix}cekprem
┃⬡ ${prefix}join
┗━⬣
┏━━⬣ *Menu Anime*
┃
┃⬡ ${prefix}anime
┃⬡ ${prefix}character
┃⬡ ${prefix}kiryu
┃⬡ ${prefix}manga
┗━⬣
┏━━⬣ *Menu Anonymous*
┃
┃⬡ ${prefix}leave
┃⬡ ${prefix}next
┃⬡ ${prefix}start
┗━⬣
┏━━⬣ *Menu Convert*
┃
┃⬡ ${prefix}readqr
┃⬡ ${prefix}toaudio
┃⬡ ${prefix}togif
┃⬡ ${prefix}toimg
┃⬡ ${prefix}tomp3
┃⬡ ${prefix}tomp4
┃⬡ ${prefix}totext
┃⬡ ${prefix}tourl
┃⬡ ${prefix}toqr
┃⬡ ${prefix}tovn
┗━⬣
┏━━⬣ *Menu Creator*
┃
┃⬡ ${prefix}carbon [text]
┃⬡ ${prefix}dbinary [text]
┃⬡ ${prefix}ebinary [text]
┃⬡ ${prefix}emojimix
┃⬡ ${prefix}hartatahta [text]
┃⬡ ${prefix}nulis [text]
┃⬡ ${prefix}ssweb [url]
┃⬡ ${prefix}styletext [text]
┃⬡ ${prefix}tts [kode]|[text]
┃⬡ ${prefix}yugioh
┗━⬣
┏━━⬣ *Menu Downloader*
┃
┃⬡ ${prefix}fb [url]
┃⬡ ${prefix}ig [url]
┃⬡ ${prefix}igstory [username]
┃⬡ ${prefix}pinterestdl [url]
┃⬡ ${prefix}spotify [url]
┃⬡ ${prefix}tt [url]
┃⬡ ${prefix}ttmp3 [url]
┃⬡ ${prefix}twitter [url]
┃⬡ ${prefix}ytmp3 [url]
┃⬡ ${prefix}ytmp4 [url]
┗━⬣
┏━━⬣ *Menu Ephoto*
┃
┃⬡ ${prefix}logofps [text]
┃⬡ ${prefix}logogaming [text]
┃⬡ ${prefix}logoanonym [text]
┃⬡ ${prefix}galaxy [text]
┃⬡ ${prefix}hologram [text]
┃⬡ ${prefix}wetglass [text]
┃⬡ ${prefix}logoneon [text]
┃⬡ ${prefix}greenbush [text]
┃⬡ ${prefix}watercolor [text]
┃⬡ ${prefix}multicolor3d [text]
┗━⬣
┏━━⬣ *Menu Games*
┃
┃⬡ ${prefix}asahotak
┃⬡ ${prefix}caklontong
┃⬡ ${prefix}dare
┃⬡ ${prefix}delttt
┃⬡ ${prefix}family100
┃⬡ ${prefix}math [mode]
┃⬡ ${prefix}suitpvp @tag
┃⬡ ${prefix}tebak [option]
┃⬡ ${prefix}tebakbendera
┃⬡ ${prefix}tictactoe
┃⬡ ${prefix}truth
┃⬡ ${prefix}Jadian
┃⬡ ${prefix}Jodohku
┃⬡ ${prefix}siapakahaku
┗━⬣${groupMsg}
┏━━⬣ *Menu Informasi*
┃
┃⬡ ${prefix}beasiswa
┃⬡ ${prefix}chord [judul lagu]
┃⬡ ${prefix}lirik [judul lagu]
┃⬡ ${prefix}hoax
┃⬡ ${prefix}kompasnews
┃⬡ ${prefix}jalantikus
┃⬡ ${prefix}jadwalbola
┃⬡ ${prefix}jadwaltv
┃⬡ ${prefix}sfilesearch [query]
┃⬡ ${prefix}happymod [query]
┃⬡ ${prefix}translate [kode]|[kalimat]
┃⬡ ${prefix}wiki [query]
┗━⬣
┏━━⬣ *Menu Other*
┃
┃⬡ ${prefix}afk [alasan]
┃⬡ ${prefix}menfess
┗━⬣${ownerMsg}
┏━━⬣ *Menu Photoeditor*
┃
┃⬡ ${prefix}flip [send image]
┃⬡ ${prefix}fisheye [send image]
┃⬡ ${prefix}pencils [send image]
┃⬡ ${prefix}removebg [send image]
┃⬡ ${prefix}rotate [send image]
┃⬡ ${prefix}roundimg [send image]
┃⬡ ${prefix}triggered [send image]
┃⬡ ${prefix}wasted [send image]
┗━⬣
┏━━⬣ *Menu Photooxy*
┃
┃⬡ ${prefix}logotiktok [text1]|[text2]
┃⬡ ${prefix}pcup [text]
┃⬡ ${prefix}pcup2 [text]
┃⬡ ${prefix}psmoke [text]
┃⬡ ${prefix}pshadow [text]
┗━⬣
┏━━⬣ *Random Image*
┃
┃⬡ ${prefix}ppcp
┃⬡ ${prefix}amongus
┃⬡ ${prefix}bucinstick
┃⬡ ${prefix}gawrgura
┃⬡ ${prefix}randcry
┃⬡ ${prefix}randkiss
┃⬡ ${prefix}dogestick
┃⬡ ${prefix}randwp
┗━⬣
┏━━⬣ *Random Text*
┃
┃⬡ ${prefix}cerpen
┃⬡ ${prefix}faktaunik
┃⬡ ${prefix}katabijak
┃⬡ ${prefix}katabucin
┃⬡ ${prefix}pantun
┃⬡ ${prefix}puisi
┃⬡ ${prefix}quote [option]
┃⬡ ${prefix}quotes
┗━⬣
┏━━⬣ *Menu Sticker*
┃
┃⬡ ${prefix}attp [text]
┃⬡ ${prefix}smeme [text1]|[text2]
┃⬡ ${prefix}stiker
┃⬡ ${prefix}ttp [text]
┗━⬣
┏━━⬣ *Menu Shorturl*
┃
┃⬡ ${prefix}bitly [url]
┃⬡ ${prefix}cuttly [url]
┃⬡ ${prefix}tinyurl [url]
┗━⬣
┏━━⬣ *Menu Searching*
┃
┃⬡ ${prefix}film [query]
┃⬡ ${prefix}gcwa [query]
┃⬡ ${prefix}whatmusic [reply audio]
┃⬡ ${prefix}gimage [query]
┃⬡ ${prefix}google [query]
┃⬡ ${prefix}joox [query]
┃⬡ ${prefix}mangatoons [query]
┃⬡ ${prefix}noveltoons [query]
┃⬡ ${prefix}searchbijak [query]
┃⬡ ${prefix}unsplash [query]
┃⬡ ${prefix}wallpaper [query]
┃⬡ ${prefix}webtoons [query]
┗━⬣
┏━━⬣ *Menu Textpro*
┃
┃⬡ ${prefix}candy
┃⬡ ${prefix}christmas
┃⬡ ${prefix}3dchristmas
┃⬡ ${prefix}sparklechristmas
┃⬡ ${prefix}holographic
┃⬡ ${prefix}deepsea
┃⬡ ${prefix}scifi
┃⬡ ${prefix}rainbow
┃⬡ ${prefix}waterpipe
┃⬡ ${prefix}spooky
┃⬡ ${prefix}karbon
┃⬡ ${prefix}neonlight2
┃⬡ ${prefix}pencil
┃⬡ ${prefix}circuit
┃⬡ ${prefix}discovery
┃⬡ ${prefix}metalic
┃⬡ ${prefix}fiction
┃⬡ ${prefix}demon
┃⬡ ${prefix}3dbox
┃⬡ ${prefix}transformer
┃⬡ ${prefix}berry
┃⬡ ${prefix}thunder
┃⬡ ${prefix}magma
┃⬡ ${prefix}3dstone
┃⬡ ${prefix}greenneon
┃⬡ ${prefix}neonlight
┃⬡ ${prefix}glitch
┃⬡ ${prefix}harrypotter
┃⬡ ${prefix}brokenglass
┃⬡ ${prefix}papercut
┃⬡ ${prefix}lion2
┃⬡ ${prefix}watercolor
┃⬡ ${prefix}neondevil
┃⬡ ${prefix}underwater
┃⬡ ${prefix}graffitibike
┃⬡ ${prefix}3davengers
┃⬡ ${prefix}snow
┃⬡ ${prefix}cloud
┃⬡ ${prefix}honey
┃⬡ ${prefix}ice
┃⬡ ${prefix}fruitjuice
┃⬡ ${prefix}bicuit
┃⬡ ${prefix}wood
┃⬡ ${prefix}whitebear
┃⬡ ${prefix}chocolate
┃⬡ ${prefix}strawberry
┃⬡ ${prefix}matrix
┃⬡ ${prefix}blood
┃⬡ ${prefix}dropwater
┃⬡ ${prefix}toxic
┃⬡ ${prefix}lava
┃⬡ ${prefix}rock
┃⬡ ${prefix}bloodglas
┃⬡ ${prefix}hallowen
┃⬡ ${prefix}darkgold
┃⬡ ${prefix}joker
┃⬡ ${prefix}wicker
┃⬡ ${prefix}firework
┃⬡ ${prefix}skeleton
┃⬡ ${prefix}blackpink
┃⬡ ${prefix}sand
┃⬡ ${prefix}glue
┃⬡ ${prefix}1917
┃⬡ ${prefix}leaves
┗━⬣
┏━━⬣ *Menu Voice*
┃
┃⬡ ${prefix}tupai
┃⬡ ${prefix}blown
┃⬡ ${prefix}deep
┃⬡ ${prefix}errape
┃⬡ ${prefix}fast
┃⬡ ${prefix}fat
┃⬡ ${prefix}nightcore
┃⬡ ${prefix}reverse
┃⬡ ${prefix}robot
┃⬡ ${prefix}slow
┃⬡ ${prefix}smooth
┃⬡ ${prefix}bass
┗━⬣
┏━━⬣ *Menu Vokal*
┃
┃⬡ ${prefix}halah
┃⬡ ${prefix}hilih
┃⬡ ${prefix}huluh
┃⬡ ${prefix}heleh
┃⬡ ${prefix}holoh
┗━⬣`
                
                m.reply(shannMsg)
            }
            break

            case 'menu': case 'list': case 'help': {
                let kukiw = `Hi i'm SHANNBot, ${ucapanWaktu}\n\n"Sistem otomatis (Whatsapp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data atau informasi hanya dengan melalui Whatsapp"\n\n*Jumlah request*\n=> ${dataCmd.value}\n\n*Ingin invite bot ini ke group kamu?*\n=> #creator\n\n"Apabila menemukan error, silahkan hubungi #creator"`
                let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 }, { buttonId: 'creator', buttonText: { displayText: '❗Creator' }, type: 1 }]

                shann.sendButtonText(m.chat, buttons, kukiw, shannMark, m)
            }
            break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }

                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return

                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    
                    this.menfess = this.menfess ? this.menfess : {}
                    let mf = Object.values(this.menfess).find(v => v.b === m.sender && v.state === false)

                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)

                        if (m.mtype === 'conversation') {
                            shann.sendText(other, `${m.text}`)
                        } else if (m.mtype === 'imageMessage') {
                            let caption = m.body
                            let media = await shann.downloadAndSaveMediaMessage(quoted)
                            
                            let {TelegraPh} = require('./lib/uploader')
                            let anu = await TelegraPh(media)

                            shann.sendMessage(other, {image: {url: anu}, caption: caption}, {quoted: ''})
                            .catch((err) => {
                                m.reply('terjadi kesalahan')
                                shann.sendText(other, '_partner meninggalkan kamu :(_')
                                delete this.anonymous[room.id]
                            })

                            fs.unlinkSync(media)
                        } else {
                            m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                                contextInfo: {
                                    ...m.msg.contextInfo,
                                    forwardingScore: 0,
                                    isForwarded: true,
                                    participant: other
                                }
                            } : {})
                        }
                    } else if (mf) {
			            if (mf && !m.quoted) return
                        let shannMsg = `Kamu mendapat balasan dari\n@${m.sender.split('@')[0]}\n\nPesan Kamu:\n${mf.pesan}\n\nBalasan:\n${m.text}`
                        shann.sendText(mf.a, shannMsg, m, {mentions: [mf.b]})
                        .then((ress) => {
                            delete this.menfess[mf.id]
                            m.reply('Berhasil mengirim balasan\n\nTertarik mencoba? Ketik .menfess')
                        })
                        .catch((err) => {return m.reply('gagal mengirim balasan')})
                    }
                    return !0
                }
			
		        if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    
                    let msgs = global.db.data.database
                    
                    if (!(budy.toLowerCase() in msgs)) return
                    
                    shann.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		        }
        }
    } catch (err) {
        console.log(err)
        m.reply('terjadi kesalahan')
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})