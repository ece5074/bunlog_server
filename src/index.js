const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const { sequelize } = require('./database/models')

const app = express();
const port = process.env.PORT || 4000;

/** 미들웨어 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'key',
    resave: false, 
    saveUninitialized: true,
    cookie: {
        secure: true,
    }
}))

app.use('/api', require(__dirname + '/api'))

sequelize.sync({force: true}).then(app.listen(port, function(){
    console.log(`Server Listen localhost:${port}`)
}));
