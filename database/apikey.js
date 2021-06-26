__path = process.cwd();
var { generateApikey } = require(__path + '/lib/generator.js');

function getFreeApikey() {
  return generateApikey()
}

function getApikey() {
  return 'QyiH67N1mWvbbJ891lpL67m_uy1oPHSlL01Vv-1qRi'
}

function getCustomApikey() {
  return '04102006'
}

module.exports = { getApikey, getCustomApikey }
