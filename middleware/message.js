const axios = require('axios');
const qs = require('querystring');
module.exports = function(send_message) {
	// LINE APIにメッセージを送信するための関数
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
					message: message,
			})
	};

	axios.request(config)
	.then((res) => {
			console.log(res.status);
	})
	.catch((error) => {
			console.log(error);
	});
}