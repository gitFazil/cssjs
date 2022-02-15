let a = "fazil";
let b = a.split("").reverse().join("");
console.log(b);


var arr = ["this", "is", "my", "wish", "to", "work", "on"];
let where = arr.length;

arr.splice(where, 0, "website");

let wish = arr.slice(where);

console.log(arr.toString());
console.log(wish.toString())

let age = [20, 25, 30, 24, 50];

age.filter((item => item < 30)).map((age) => console.log(age));

let initial = 0;
let sumOfArr = age.reduce((acu, current) => acu + current, initial)

console.log(sumOfArr);