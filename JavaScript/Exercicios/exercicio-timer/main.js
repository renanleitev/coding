const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let hora = 0;
let minuto = 0;
let segundo = 0;
let estado = 'pausado';
let timer;
function mostrarHora(estado){
    if (estado === 'iniciado'){
        timer = setInterval(function (){
            relogio.innerHTML = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`;
            segundo++;
            if (minuto === 59 && segundo === 60){
                segundo = minuto = 0;
                hora++;
            };
            if (segundo === 60){
                segundo = 0;
                minuto++;
            };
        }, 1000);
        relogio.style.color = 'black';
    }
    else if (estado === 'pausado'){
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    else if (estado === 'zerado'){
        hora = minuto = segundo = 0;
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'green';
    };
};
iniciar.addEventListener('click', function(){
    mostrarHora('iniciado');
});
pausar.addEventListener('click', function(){
    mostrarHora('pausado');
});
zerar.addEventListener('click', function(){
    mostrarHora('zerado');
});