function aleatorio(min = 1000, max = 2000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}