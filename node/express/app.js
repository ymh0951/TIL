const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser('zerochopassword'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'zerochopasword',
    cookie: {
        httpOnly: true,
    }
}));

app.use((req, res, next) => {
    if(req.session.id) {
        express.static(path.join(__dirname, 'public'))(req, res, next);
    } else {
        next();
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    req.session
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello wildcard`);
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(404).send('404지롱');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('에러났지롱. 근데 안알려주지롱')
});

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});