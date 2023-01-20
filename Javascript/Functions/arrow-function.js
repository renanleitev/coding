const functionArrow = () => {
    console.log("Exemplo de arrow function");
}
functionArrow();
// ! Obs: Arrow functions não aceita arguments!
const semArgs = (teste) => {
    console.log(arguments);
}
semArgs('teste'); // erro