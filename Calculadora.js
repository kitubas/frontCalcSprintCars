
function Calcular() {
    
    let nomeDoCarro = document.getElementById('inputModelo');
    let nomeCarro = String(nomeDoCarro.value);
    let resultAluguel=document.getElementById('resulado-aluguel')

    //porcetagem
    let primeiraPorcento = 0.1
    let segundaPorcento = 0.15

    //tempo-anos
    let tempo1 = '1 anos'
    let tempo2 = '2 anos'
    let tempo3 = '3 anos'
    //kilometragem
    let km1 = '100 km'
    let km2 = '200 km'
    let km3 = '300 km'

    let tempoFicaria = document.getElementById('opcoesTempo');
    let tempoFicariaSelecionado = tempoFicaria.options[tempoFicaria.selectedIndex].text;


    let kilometragem = document.getElementById('opcoesKm');
    let kilometragemSelecionada = kilometragem.options[kilometragem
        .selectedIndex].text;

    console.log(kilometragemSelecionada)



    let precoInicial = precoBase(nomeCarro);

    let precoFinal = calcularPrecoFinal(
        precoInicial,
        tempoFicariaSelecionado,
        kilometragemSelecionada
    );

    //função pesquisar 
    
        let Pesquisa=Pesquisar()
    

    function calcularPrecoFinal(precoComeca, tmpSelect, kmSelect) {
        if (tmpSelect == tempo1 && kmSelect == km1) {
            return precoComeca;
        }
        else {
            return Number(
                precoComeca +
                proporcaoQtdKm(precoComeca, kmSelect) +
                calcularProporcaoTempo(precoComeca, tmpSelect)
            );
        }
    }


    //preço base = O carro rodando 100 km em um ano  
    function precoBase(nome) {
        if (nome === "kwid") return 1000;
        if (nome === "renegade") return 2000;
        if (nome === "uno") return 1500;
        if (nome === "camaro") return 3000;
    }



    function proporcaoQtdKm(precoInicio, kmSelec) {

        if (kmSelec === km2) {
            return precoInicio * primeiraPorcento;
        }
        if (kmSelec === km3) {
            return precoInicio * segundaPorcento;
        }

        return 0;
    }


    function calcularProporcaoTempo(precoInicio, tmpSelec) {

        if (tmpSelec === tempo2) return precoInicio * primeiraPorcento;
        if (tmpSelec === tempo3) return precoInicio * segundaPorcento;

        return 0;
    }

    
   //seção resposta
    resultAluguel.appendChild(resultado);
    resultAluguel.classList.add('secao-respota');

    resultado.innerHTML=`O aluguel sairá por ${precoFinal}`;
    

    


    //criar um elemento do js para o html com o comando createElement("tag html");





}


