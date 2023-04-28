const express = require('express')

let translateRoute = require('./routes/translate');

const app = express();
const port = process.env.PORT || 8000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/translate', translateRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


