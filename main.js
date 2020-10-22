// var http = require('http'); //httpモジュール呼び出し
// var server = http.createServer(function (request, response) {
//     // リクエストを受けると以下のレスポンスを送信する
//     response.writeHead(200, {'Content-Type': 'text/plain'}); //レスポンスヘッダーに書き込み
//     response.write('Hello World\n'); // レスポンスボディに「Hello World」を書き込み
//     response.end(); // レスポンス送信を完了する
// });
// server.listen(process.env.PORT || 8080);  //8080番ポートで待ち受け

// 'use strcit';

// const axios = require('axios');
// const qs = require('querystring');
// const BASE_URL = 'https://notify-api.line.me';
// const PATH =  '/api/notify';
// const LINE_TOKEN = `O8T0r4dDkWbO5y9ujb3Sg6F3j63zoD8wdEgSTLPzo1c`;

// let config = {
//     baseURL: BASE_URL,
//     url: PATH,
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': `Bearer ${LINE_TOKEN}`
//     },
//     data: qs.stringify({
//         message: `こんばんわ`,
//     })
// };

// axios.request(config)
// .then((res) => {
//     console.log(res.status);
// })
// .catch((error) => {
//     console.log(error);
// });

// const lineNotify = require('line-notify-nodejs')('O8T0r4dDkWbO5y9ujb3Sg6F3j63zoD8wdEgSTLPzo1c')

// lineNotify.notify({
// 	message: '健闘を祈る',
// }).then(() => {
// 	console.log('send completed!')
// });

var express = require("express");
var app = express();

// サーバー
app.listen(3000)
// ビューエンジンにejsを設定
app.set('view engine', 'ejs');
// ルートにアクセスした時にindex.ejsを返す設定
app.get("/", function(req, res, next){
	res.render("index", {});
});

