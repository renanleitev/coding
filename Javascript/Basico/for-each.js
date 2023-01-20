// For each = Retorna elemento, indice (opcional) e array (opcional)
const nomes = ['Fulano', 'Beltrano', 'Ciclano'];
nomes.forEach(
    function(nome, indice, array){
        console.log('nome', 'indice', 'array');
        console.log(nome, indice, array);
    }
);

// const grades = [10, 8, 13];

// grades.forEach(function(i) {
//     // do something with individual grade
//     console.log(i);
// });

// const ids = [10, 9, 8]

// function logUserIds(userIds) {
//     userIds.forEach(function(userId) {
//         console.log(userId);
//     });
//     return "amoeba"; // ✅ return from the logUserIds function
// }

// logUserIds(ids)

// grades = [6, 7, 8]

// function logGrades(grades) {
//     grades.forEach(function(grade) {
//         console.log(grade);
//         return console.log("interno");
//     });
//     return console.log("externo");
// }

// logGrades(grades)