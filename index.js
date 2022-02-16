// let a = "fazil";
// let b = a.split("").reverse().join("");
// console.log(b);


// var arr = ["this", "is", "my", "wish", "to", "work", "on"];
// let where = arr.length;

// arr.splice(where, 0, "website");

// let wish = arr.slice(where);

// console.log(arr.toString());
// console.log(wish.toString())
let second = [1, 10, 100, 13, 23, 37, 5, 56, 9]

console.log(second.sort());

let age = [20, 25, 30, 24, 50];
console.log(age.sort((a, b) => {
	if (a < b) {
		return -1
	}
	else if (a > b) {
		return 1
	}
}));
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
	},
	{
		username: 'rahul5678',
		fullname: 'Rahul ',
		password: "adilkhan"
	}
]
console.log(users.sort((a, b) => {
	if (a.username < b.username) {
		return -1
	}
	else if (a.username > b.username) {
		return 1
	}
}));

// age.filter((item => item < 30)).map((age) => console.log(age));

// let initial = 0;
// let sumOfArr = age.reduce((acu, current) => acu + current, initial)

// console.log(sumOfArr);

// const items = { id: 2, age: '6', name: 'fazil' };
// const obj = Object.keys(items);
// console.log(obj)