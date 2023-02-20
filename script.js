//Faça: Uma referência que armazene uma lista com todas as teclas e imprima o valor dela na aba console.
var listaDeTeclas = document.querySelectorAll('.tecla');

//Faça: Um script que percorra a lista de teclas e ao clicar em qualquer tecla do teclado, imprima o valor no campo(input).
var campoTelefone = document.querySelector('.telefone');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    tecla.addEventListener('click', function(){
        campoTelefone.value = campoTelefone.value + tecla.value;
        console.log(campoTelefone.value)
    });
    
//Faça: Um script que percorra a lista de teclas e ao clicar na tecla Enter/Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.
    tecla.onkeydown = function(e){
        if(e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function(e){
        tecla.classList.remove('ativa')    
    }
 
}


