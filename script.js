document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// const username = document.getElementById('username').value;
	// const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		authorizationToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1YTY2YTliZS0xZDAwLTQyNzAtOTMwMS0wMjgzNzIwN2FiMjIiLCJzaXRlIjoiaG9pY2hvaXR2Iiwic2l0ZUlkIjoiN2ZhMGVhOWEtOTc5OS00NDE3LTk5ZjUtY2JiNTM0M2M1NTFkIiwiZW1haWwiOiJtb2xveUBob2ljaG9pLnR2IiwiaXBhZGRyZXNzZXMiOiI0NS42NC4yMzcuODUsIDEwLjEyMC4zNC40MSwgMzUuMTc0LjEyOS43NywgMTMwLjE3Ni45OC44MyIsImNvdW50cnlDb2RlIjoiSU4iLCJwb3N0YWxjb2RlIjoiNzAwMDE0IiwicHJvdmlkZXIiOiJ2aWV3bGlmdCIsImRldmljZUlkIjoiYnJvd3Nlci1lNGM2ZmViZS02MzllLTViMjUtYjMwMS1hZjRmYmJmM2UxNTUiLCJpZCI6IjVhNjZhOWJlLTFkMDAtNDI3MC05MzAxLTAyODM3MjA3YWIyMiIsInBob25lTnVtYmVyIjoiKzkxODI0MDk5Nzk3NSIsInBob25lQ29kZSI6OTEsImlhdCI6MTcwOTEwNzU5MywiZXhwIjoxNzA5MTkzOTkzfQ.rZSZqD3DKH-qFOvu-oZA7pf9_P0p1Q9lnQ4GQORNbF0',
		refreshToken:
			'23b1c5331a1ea1e405649e8a0395d84da52ccc6a6be76ded0c2cdafb936765693a99b6258e842cffe2e08dc3bc5aed1a'
	};

	// Sending a POST request to the server
	fetch('http://localhost:3000/sso-gramin-user', {
		method: 'POST', // Specify the method
		headers: {
			'Content-Type': 'application/json', // Specify the content type
			Authorization: `Bearer ${JSON.stringify(data)}`
		},
		body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// return response.json();
			window.location.href = 'http://localhost:3000/';
			// Parse JSON response into a JavaScript object
		})

		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			alert('Login failed!');
		});
});
