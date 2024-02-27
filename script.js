document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		authorizationToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJzYWNoaW50ZXN0QGdtYWlsLmNvbSIsImlwYWRkcmVzc2VzIjoiNDUuNjQuMjM3Ljg1LCAxMC4xMjAuOC4yNTMsIDM1LjE3NC4xMjkuNzcsIDEzMC4xNzYuOTguODYiLCJjb3VudHJ5Q29kZSI6IklOIiwicG9zdGFsY29kZSI6IjcwMDAxNCIsInByb3ZpZGVyIjoidmlld2xpZnQiLCJkZXZpY2VJZCI6ImJyb3dzZXItN2U5NzE3ZDItOWQ5NS1hODM5LTkyMzMtNTM0M2NlOGMzM2M4IiwiaWQiOiIyNzU1MjRmYS05N2I2LTQ3ZWMtYTc4Mi1kNTNhMjc4ZWQwNmEiLCJwaG9uZU51bWJlciI6Iis5MTk2ODI2ODU2NDMiLCJwaG9uZUNvZGUiOjkxLCJpYXQiOjE3MDkwMTc5MjMsImV4cCI6MTcwOTEwNDMyM30.tadOPjZNtQ68OEaDSX-cmB4SaL1xnqoHV351uR-Rx1A',
		refreshToken:
			'eccf8471f9af14cb9af9e207b462eafcc3f2231714cebad87f4ddb1813db5d65835ae677bbfdf76e0c6e2a52da3cfcbc',
		userId: '275524fa-97b6-47ec-a782-d53a278ed06a',
		email: 'sachintest@gmail.com',
		name: 'sachin sharma',
		isSubscribed: false,
		provider: 'viewlift',
		providers: ['viewlift'],
		passwordEnabled: true,
		phoneNumber: '+919682685643',
		phoneCode: 91
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
			window.location.href = 'http://localhost:3000/'; // Parse JSON response into a JavaScript object
		})

		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			alert('Login failed!');
		});
});
