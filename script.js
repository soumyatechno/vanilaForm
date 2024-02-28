document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		authorizationToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJzYWNoaW50ZXN0QGdtYWlsLmNvbSIsImlwYWRkcmVzc2VzIjoiNDUuNjQuMjM3Ljg1LCAxMC4xMjAuOC4yNTMsIDEwNy4yMC4xMTAuMTc4LCAxMzAuMTc2Ljk4LjY4IiwiY291bnRyeUNvZGUiOiJJTiIsInBvc3RhbGNvZGUiOiI3MDAwMTQiLCJwcm92aWRlciI6InZpZXdsaWZ0IiwiZGV2aWNlSWQiOiJicm93c2VyLWViZGE2ZmVkLTQyNDEtMGVhYi1mNTcwLTI3YjJiNzFiNGQ5ZiIsImlkIjoiMjc1NTI0ZmEtOTdiNi00N2VjLWE3ODItZDUzYTI3OGVkMDZhIiwicGhvbmVOdW1iZXIiOiIrOTE5NjgyNjg1NjQzIiwicGhvbmVDb2RlIjo5MSwiaWF0IjoxNzA5MDk5NTMxLCJleHAiOjE3MDkxODU5MzF9.yqwHGGN8EYYiw7K6ab9r2QKfXpBnKR08M7Q9V2ROwKU'
	};

	console.log(username, 'data');

	// Sending a POST request to the server
	fetch('http://localhost:3000/sso-gramin-user', {
		method: 'POST', // Specify the method
		headers: {
			'Content-Type': 'application/json' // Specify the content type
		},
		body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// return response.json();
			window.location.href = 'http://localhost:3000/';
			window.location.headers(data);
			// Parse JSON response into a JavaScript object
		})

		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			alert('Login failed!');
		});
});
