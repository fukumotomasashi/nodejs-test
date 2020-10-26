var express = require('express');
var router = express.Router();
const axios = require('axios');
const qs = require('querystring');

router.get('/', (req, res) => res.render('message/index'));
router.post('/post', (req, res) => {
	const BASE_URL = 'https://notify-api.line.me';
	const PATH =  '/api/notify';
	const LINE_TOKEN = `O8T0r4dDkWbO5y9ujb3Sg6F3j63zoD8wdEgSTLPzo1c`;

	let config = {
			baseURL: BASE_URL,
			url: PATH,
			method: 'post',
			headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': `Bearer ${LINE_TOKEN}`
			},
			data: qs.stringify({
					message: `こんばんわ`,
			})
	};

	axios.request(config)
	.then((res) => {
			console.log(res.status);
	})
	.catch((error) => {
			console.log(error);
	});

	const lineNotify = require('line-notify-nodejs')('O8T0r4dDkWbO5y9ujb3Sg6F3j63zoD8wdEgSTLPzo1c')

	lineNotify.notify({
		message: '第３ハードルのテスト',
	}).then(() => {
		console.log('send completed!')
	});
});

module.exports = router;