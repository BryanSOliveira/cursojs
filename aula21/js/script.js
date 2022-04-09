// Não poluir o escopo global
// Criar funções

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    // Evento (espião)
    // Todos os eventos vão usar 'on' no início
    // onsubmit atualiza a página e a gente perde o console.log
    // form.onsubmit = function (evento) {
    //     // Preveni o que era pra acontecer por padrão
    //     // Não envia o formulário
    //     evento.preventDefault();
    //     console.log('Foi enviado.');
    // };

    // Escutador de evento no formulário
    // Não precisa do 'on'

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        })
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();