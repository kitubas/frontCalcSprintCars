
function Pesquisar() {

    let nomeDoCarro = document.getElementById("inputModelo");
    let nomeCarro = String(nomeDoCarro.value);

    
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    resposta.innerHTML=' '

    if (nomeCarro.length === 0) {
        window.alert('escolha um modelo de carro!');
    }
    else {

        if (nomeCarro === "kwid") {


            img.setAttribute('src', 'img/kwid.png');



        }

        else if (nomeCarro === "renegade") {

            img.setAttribute('src', 'img/renegade.png');


        }

        else if (nomeCarro === "uno") {


            img.setAttribute('src', 'img/uno.png');


        }

        else if (nomeCarro === "camaro") {

            img.setAttribute('src', 'img/camaro.png');


        }
        resposta.appendChild(img);


    }
}