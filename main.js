var http = require('http'); //httpモジュール呼び出し
var express = require("express");
var app = express();
var path = require("path");
var cors = require("cors");
var messageRouter = require('./routes/message');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(messageRouter);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
