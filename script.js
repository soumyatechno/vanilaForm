document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		expiration: 1708592705000,
		authorizationToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJzYWNoaW50ZXN0QGdtYWlsLmNvbSIsImlwYWRkcmVzc2VzIjoiNDkuMzcuNTQuMjUyLCAxMC4xMjAuMzcuMTEzLCAzNS4xNzQuMTI5Ljc3LCAxMzAuMTc2Ljk4LjcxIiwiY291bnRyeUNvZGUiOiJJTiIsInBvc3RhbGNvZGUiOiI3MTMzMjUiLCJwcm92aWRlciI6InZpZXdsaWZ0IiwiZGV2aWNlSWQiOiJicm93c2VyLWVmMzQ2ODExLTkyNDgtZWFlZC05N2MxLTNhMjdjOTdhOWUzMCIsImlkIjoiMjc1NTI0ZmEtOTdiNi00N2VjLWE3ODItZDUzYTI3OGVkMDZhIiwicGhvbmVOdW1iZXIiOiIrOTE5NjgyNjg1NjQzIiwicGhvbmVDb2RlIjo5MSwiREVWSUNFX0xJTUlUX0VYQ0VFREVEIjp0cnVlLCJpYXQiOjE3MDg1MDYzMDUsImV4cCI6MTcwODU5MjcwNX0.4gPHryoUCvjohgfaPVB2vG49U0GEz1lB0Afaduc6y_Y',
		refreshToken:
			'6ffe8f9bb658e5e8f8ff07079b6a350ff2474abab39b9acbfe2c09ea61dc4a6ccf1b5b79f298adee6fe46a46d9ed2a06',
		duration: 86399608
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
			return response.json(); // Parse JSON response into a JavaScript object
		})

		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			alert('Login failed!');
		});
});
