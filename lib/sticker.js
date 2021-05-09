const fetch = require('node-fetch')
const upload = require('./upload.js')
const fs = require('fs')

async function sticker(img, url, packname, author) {
    url = url ? url : await upload(img)
    let res = await fetch('https://api.xteam.xyz/sticker/wm?' + new URLSearchParams(Object.entries({
      url,
      packname,
      author
    })))
    return await res.buffer()
}

module.exports = { sticker }
