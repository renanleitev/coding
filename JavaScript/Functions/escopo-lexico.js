const nome = 'Fulano';

function falaNome(){
    const nome = 'Beltrano';
    console.log(nome);
};

function usaFalaNome(){
    const nome = 'Sicrano';
    falaNome();
};

usaFalaNome();