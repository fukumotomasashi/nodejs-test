function sendData(data) {
	// 非同期で/postにhttpリクエストを送信
	var url = '/message';
	fetch(url, {
		method: 'POST',
		body: data,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
	.then((res) => {
		if (res.ok) {
			console.log('OK')
		} else {
			console.log('bad')
		}
	})
	.catch((error) => {
		console.log('error');
	})
	.finally(() => {
		var input = document.getElementById('message');
		input.value = '';
	})

}

// 送信ボタンを押すとイベント発火
var line_message = document.getElementById('line_message');
line_message.addEventListener('submit', (e) => {
	e.preventDefault();
	// inputタグの値を取得
	var message = document.getElementById('message').value;
	console.log(message);
	var obj = {message: message};
	var data = JSON.stringify(obj)
	console.log(data);
	sendData(data);
});