function pronomeNeutro(string){
    const array = Array.from(string.toLowerCase());
    let plural;
    if (array[array.length - 1] === 's'){
        array.pop();
        plural = true;
    };
    const pronome = array.map((letra, indice) => {
        if ((letra === 'a' || letra === 'o') && indice === array.length - 1) return 'e';
        return letra;
    });
    if (plural === true) pronome.push('s');
    return pronome.toString().replaceAll(',', '');
}
console.log(pronomeNeutro('ministras'));