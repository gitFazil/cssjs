const users = [
	{
		username: 'fazilkhan',
		fullname: 'Fazil ',
		password: "fazilkhan"
	},
	{
		username: 'adilkhan',
		fullname: 'Adil ',
		password: "adilkhan"
	}
]
function login() {
	console.log('hello')
	let usernameInp = document.getElementById('username').value;
	let passwordInp = document.getElementById('password').value;
	users.map(({ username, fullname, password }) => {
		return username == usernameInp && password == passwordInp ?
			myFunc(fullname)
			: document.querySelector('.authError').style.visibility = "visible";
	})
	// let loggerUser = users.find(user => user.username === usernameInp && user.password === passwordInp);
	// console.log(loggerUser.fullname);

	function myFunc(name) {

		document.getElementById('nameResult').innerHTML = name;
		const welcome = document.querySelector('.welcome');
		const formBox = document.querySelector('.formBox');
		welcome.style.display = "block";
		formBox.style.display = "none";


	}
}

