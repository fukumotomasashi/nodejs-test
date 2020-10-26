var http = require('http'); //httpモジュール呼び出し
var express = require("express");
var app = express();
var path = require("path");
var cors = require("cors");
var messageRouter = require('./routes/message');
const PORT = process.env.PORT || 5000
// const allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Authorization, access_token'
//   )

//   // intercept OPTIONS method
//   if ('OPTIONS' === req.method) {
//     res.send(200)
//   } else {
//     next()
//   }
// }

// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(messageRouter);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
