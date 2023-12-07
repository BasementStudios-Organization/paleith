const express = require('express');
const app = express();

const router = require('./routes/router');

app
    .set('view engine', 'pug')
    .use(router)

app.listen(3000, () => {
    console.log('Server started on port 3000')
})