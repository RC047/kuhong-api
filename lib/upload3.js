const fetch = require('node-fetch')
const upload = require('./upload.js')
const imgbb_key = '761ea2d5575581057a799d14e9c78e28'

module.exports = async (url, buffer) => {
  let ranName = Math.floor(Math.random() * 1000)
  let img = url ? url : await upload(buffer)
  let imgbb = await (await fetch(`https://api.imgbb.com/1/upload?expiration=180&key=${imgbb_key}&image=${img}&name=${ranName}`)).json()

 return imgbb.data.url
}
