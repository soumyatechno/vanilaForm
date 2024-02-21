document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Constructing the data object to send
	const data = {
		username: username,
		password: password
	};

	console.log(username, 'data');

	// Sending a POST request to the server
	fetch('https://example.com/api/login', {
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
		.then((data) => {
			console.log(data); // Handle the data from the server
			alert('Login successful!');
		})
		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
			alert('Login failed!');
		});
});
