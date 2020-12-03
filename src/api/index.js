const express = require('express');
const router = express.Router();

const hello = function(req, res){
    res.status(200).json('hello');
}

router.get('/', hello);

router.use('/auth', require(__dirname + '/auth'));
router.use('/post', require(__dirname + '/post'));
router.use('/reply', require(__dirname + '/reply'));

module.exports = router