
function loginx() {
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if ((pass == "")&&(user == "")) {
		document.getElementById('out').innerHTML = "please enter a username and password.";
		console.log("Login error");
	}
	else if (user == "") {
		document.getElementById('out').innerHTML = "please enter a username.";
		console.log("Login error");
	}
	else if (pass == "") {
		document.getElementById('out').innerHTML = "please enter a password.";
		console.log("Login error");
	}
	else{
		document.getElementById('out').innerHTML = "thank you for logging in!";
	}
}