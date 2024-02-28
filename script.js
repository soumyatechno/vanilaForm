document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		authorizationToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJzYWNoaW50ZXN0QGdtYWlsLmNvbSIsImlwYWRkcmVzc2VzIjoiNDUuNjQuMjM3Ljg1LCAxMC4xMjAuMzQuNDEsIDM1LjE3NC4xMjkuNzcsIDEzMC4xNzYuOTguODkiLCJjb3VudHJ5Q29kZSI6IklOIiwicG9zdGFsY29kZSI6IjcwMDAxNCIsInByb3ZpZGVyIjoidmlld2xpZnQiLCJkZXZpY2VJZCI6ImJyb3dzZXItOGIzYjE2MzctNmEwYS0xNWJkLTlhYmYtNTUwODhmYmUxZWYwIiwiaWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJwaG9uZU51bWJlciI6Iis5MTk2ODI2ODU2NDMiLCJwaG9uZUNvZGUiOjkxLCJpYXQiOjE3MDkwOTc2NTQsImV4cCI6MTcwOTE4NDA1NH0.CTUOn2RDLp5IsYXRwolklOQ3X9IhEuywvNP8Kke0Fj8',
		refreshToken:
			'c644f651b2b557ab1e9d7345b4566d811ac7f4527269b9cf9ecb833bd5e22bff4a089112333f4840fac78c212fd9acc9'
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
