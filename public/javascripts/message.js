// $(function() {
// 	$('#line_message').on('submit', function(e) {
// 		e.preventDefault()
// 		var formData = new FormData(this);
// 		console.log(formData);
// 		console.log(...formData.entries());
// 		var url = '/message';
// 		$.ajax({
// 			url: url,
// 			type: 'POST',
// 			dataType: 'json',
// 			data: formData,
// 			processData: false,
// 			contentType: false
// 		})
// 		.done(function(data) {
// 			console.log(data)
// 		})
// 		.fail(function() {
// 			console.log('error');
// 		})
// 	});
// });

function sendData(data) {
	var url = '/message';
	fetch(url, {
		method: 'POST',
		body: data,
		// mode: 'no-cors',
		headers: {
			'Accept': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded'
			'Content-Type': 'application/json'
		}
	}).then((res) => {
		if (res.ok) {
			console.log('OK')
		} else {
			console.log('bad')
		}
	});
}

// var btn = document.getElementById('btn');
// console.log(btn);
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	var line_message = document.getElementById('line_message');
// 	console.log(line_message);
// 	var fd = new FormData(line_message);
// 	console.log(...fd.entries());
// 	var data = fd;
// 	console.log(data);
// 	sendData(data);
// });

var line_message = document.getElementById('line_message');
line_message.addEventListener('submit', (e) => {
	e.preventDefault();
	var message = document.getElementById('message').value;
	console.log(message);
	// var fd = new FormData();
	// console.log(fd)
	// var data = fd.append('message', message);
	var obj = {message: message};
	var data = JSON.stringify(obj)
	console.log(data);
	sendData(data);
});