const express = require('express')

let translateRoute = require('./routes/translate');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/translate', translateRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


