//Faça: Uma referência que armazene uma lista com todas as teclas e imprima o valor dela na aba console.
var listaDeTeclas = document.querySelectorAll('.tecla');

//Faça: Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.
var campoTelefone = document.querySelector('.telefone');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    tecla.addEventListener('click', function(){
        campoTelefone.value = campoTelefone.value + tecla.value;
        console.log(campoTelefone.value)
    });

    
}

//Faça: Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.

