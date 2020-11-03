var express = require('express');
var app = express();
var send_message = require("../middleware/message");
var router = express.Router();
const axios = require('axios');
const qs = require('querystring');
var body = require('body-parser');

router.get('/', (req, res) => res.render('message/index'));
router.post('/message', (req, res) => {
	console.log(req.body);
	console.log(req.body['message']);
	var message = req.body['message'];
	// LINEにメッセージ送信
	send_message(message);
	res.send('成功');
});

module.exports = router;