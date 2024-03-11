document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJzYWNoaW50ZXN0QGdtYWlsLmNvbSIsImlwYWRkcmVzc2VzIjoiNDUuNjQuMjM3Ljg1LCAxMC4xMjAuOC4xNzgsIDU0LjIyNC4xMjguMjAyLCAxMzAuMTc2Ljk4LjcwIiwiY291bnRyeUNvZGUiOiJJTiIsInBvc3RhbGNvZGUiOiI3MDAwMTQiLCJwcm92aWRlciI6InZpZXdsaWZ0IiwiZGV2aWNlSWQiOiJicm93c2VyLTIzNjM2MjYxLTk5ODAtMjlkMC0zOTliLTA5YjI5MzAwYTdjOSIsImlkIjoiMjc1NTI0ZmEtOTdiNi00N2VjLWE3ODItZDUzYTI3OGVkMDZhIiwicGhvbmVOdW1iZXIiOiIrOTE5NjgyNjg1NjQzIiwicGhvbmVDb2RlIjo5MSwiaWF0IjoxNzA5NzIyODQ0LCJleHAiOjE3MDk4MDkyNDR9.pGDnt8aqyMMwPeMisbjUS_aR-WXbObooAzOBckmOgbs';
	// Sending a POST request to the server
	fetch('http://localhost:3000/', {
		method: 'GET', // Specify the method
		headers: {
			'Content-Type': 'application/json',
			'x-mygp-auth-token': `Bearer${data}`
			// Specify the content type
		}
		// body: JSON.stringify(data)
		// Convert the JavaScript object to a JSON string
	})
		.then((response) => {
			// if (!response.ok) {
			// 	throw new Error('Network response was not ok');
			// }
			// return response.json();
			// window.location.href = 'http://localhost:3000/';
			// Parse JSON response into a JavaScript object
		})

		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			// alert('Login failed!');
		});
});
