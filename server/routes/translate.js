let translateText = require('../utils/translate');
let translation = {"translatedText": ""};

module.exports = function(req, res) {
  console.log("post api called");
  const { text, sourceLang, targetLang } = req.query;
  translateText(text, sourceLang, targetLang)
    .then((translatedText) => {
      translation.translatedText = translatedText;
      console.log(translation);
      res.send(translation);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
};
