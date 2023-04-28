let request = require('request')
let apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
let url = 'https://translation.googleapis.com/language/translate/v2'

let translateText = (text, sourceLang, targetLang) => {
  let body = {
    q: text,
    source: sourceLang,
    target: targetLang,
    format: 'text'
  }

  return new Promise((resolve, reject) => {
    request({
      url: url,
      qs: {
        key: apiKey
      },
      method: 'POST',
      json: body
    }, (err, response, body) => {
      if (err) {
        reject(err)
      } else if (response.statusCode !== 200) {
        reject(response.statusCode)
      } else {
        resolve(body.data.translations[0].translatedText)
      }
    })
  })
}

module.exports = translateText;
