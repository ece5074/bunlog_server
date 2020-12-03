const express = require('express');
const router = express.Router();

/**
 * 조회
 */
router.get('/', function(req, res){

});

/**
 * 선택적 조회
 */
router.get('/:username', function(req, res){
    const { username } = req.params;
});

router.patch('/:username', function(req, res){
    const { username } = req.params;
    const { password, newPassword, email } = req.body;
});

router.delete('/:username', function(req, res){
    const { username } = req.params;

    res.status(204);
});

module.exports = router;