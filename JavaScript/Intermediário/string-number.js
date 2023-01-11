let str = "42";
let convert = Number.parseInt(str, 10);
console.log(typeof(str));
console.log(typeof(convert));

console.log(Number.parseInt("123abc", 10)) // 123
console.log(Number.parseInt("5 meters", 10)) // 5