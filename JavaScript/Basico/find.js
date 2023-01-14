let names = ["Sam", "Alex", "Charlie"];

let result = names.find(
	function(name) {
		console.log("chamando");
        // Para de chamar quando encontra o elemento desejado
		return name === "Alex";
	}
);
console.log(result); // "Alex"

let firstNumberAboveTen = numbers.find(
    function(number) {
        return number > 10;
    }
);
console.log(firstNumberAboveTen); // 14