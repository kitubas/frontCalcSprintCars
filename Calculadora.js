

    function Calcular() {
        let nomeDoCarro = document.getElementById('inputModelo');
        let nomeCarro = String(nomeDoCarro.value);

        //porcetagem
        let primeiraPorcento=0.1
        let segundaPorcento=0.15

        //precodoBaseDoAluguel


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

    
    function calcularPrecoFinal(precoComeca, tmpSelect, kmSelect) {
        if (tmpSelect == "1 ano" && kmSelect == "100 km") {
            return precoComeca;
        }
        else {
            return Number(
                precoComeca+
                proporcaoQtdKm(precoComeca, kmSelect) +
                calcularProporcaoTempo(precoComeca, tmpSelect)
            );
        }
    }


    //preço base = O carro rodando 100 km em um ano  
    function precoBase(nome) {
        if (nome === "kwid") return 1000;
        if (nome === "renegade") return 2000;
        if (nome ==="uno") return 1500;
        if (nome === "camaro") return 3000;
    }



    function proporcaoQtdKm(precoInicio, kmSelec) {

        if (kmSelec === kilometragemSelecionada ) {
            return precoInicio * primeiraPorcento;
        }
        if (kmSelec === kilometragemSelecionada ) {
            return precoInicio * segundaPorcento;
        }

        return 0;
    }


    function calcularProporcaoTempo(precoInicio, tmpSelec) {

        if (tmpSelec === tempoFicariaSelecionado) return precoInicio * primeiraPorcento;
        if (tmpSelec ===tempoFicariaSelecionado) return precoInicio * segundaPorcento;

        return 0;
    }




    window.alert(`O aluguel sairá por ${precoFinal}`);
    
   



    
}


    