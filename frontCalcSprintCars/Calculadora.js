//calculadora sprintcar
//Autores:Henrique Leite e Antonio Alves

function procurarNome() {
    let nomessss = document.getElementById('inputModelo')
    let nomeCarro = String(nomessss.value)
    let img=document.createElement('img')


    if (nomeCarro.length === 0) {
        window.alert('escolha um modelo de carro!');
    }
    else {
        if (nomeCarro === "kwid") {
            resposta.innerHTML = (`bar do gordo`);
            img.setAttribute('src' , './kwid.png');

        }
    }
}

