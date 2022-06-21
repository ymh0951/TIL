const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(port, '번 포트에서 서버 연결중입니다.');
});