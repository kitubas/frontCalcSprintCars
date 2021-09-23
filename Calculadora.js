
function Calcular() {

    let carros = ['kwid', 'uno', 'renegade', 'camaro'];





    let nomeDoCarro = document.getElementById('inputModelo');
    let nomeCarro = String(nomeDoCarro.value);
    let resultAluguel = document.getElementById('resulado-aluguel')



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

    let Pesquisa = Pesquisar();

    ////////////// carregar tabela
    
    criarTabela(nomeCarro, carros, tempoFicariaSelecionado, kilometragemSelecionada)


    function criarTabela(carroSelecionado, carrosPossiveis, tmp, kilometragem) {
        let tbody = document.querySelector("#tabela-carros");
        tbody.innerHTML=' ';

        let precoInicial = precoBase(carroSelecionado)
        let precoTermina = calcularPrecoFinal(
            precoInicial,
            tmp,
            kilometragem
        );

        let carroTr = montarTr(carroSelecionado, tmp, kilometragem, precoTermina);
        carroTr.classList.add("carro");
        // carroTr.style.border='solid 2px #000'
        tbody.appendChild(carroTr);


        let indice = carrosPossiveis.indexOf(carroSelecionado);
        carrosPossiveis.splice(indice, 1);


        for (let i = 0; i < carrosPossiveis.length; i++) {
            let precoComeca = precoBase(carrosPossiveis[i]);
            let precoTermina = calcularPrecoFinal(
                precoComeca,
                tempoFicariaSelecionado,
                kilometragemSelecionada
            );

            
            let carroTrFor = montarTr(carrosPossiveis[i], tmp, kilometragem, precoTermina);

    
            tbody.appendChild(carroTrFor);
            
        }



    }


    function montarTr(nome, tempo, km, precoTotal) {

        let modeloTr = document.createElement("tr");
        modeloTr.classList.add("carros");


        modeloTr.appendChild(montarTd(nome, "info-nome"));
        modeloTr.appendChild(montarTd(tempo, "info-tempo"));
        modeloTr.appendChild(montarTd(km, "info-km"));
        modeloTr.appendChild(montarTd(precoTotal, "info-precoFinal"));




        return modeloTr;

    }


    //criar um td e uma class para cada td
    function montarTd(dados, classe) {
        let td = document.createElement('td');
        td.textContent = dados;
        td.classList.add(classe);

        return td;

    }


    //////////////////////////////////////////////////////




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
        if (nome == carros[0]) return 1000;
        if (nome == carros[1]) return 2000;
        if (nome == carros[2]) return 1500;
        if (nome == carros[3]) return 3000;
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

    resultado.innerHTML = `O aluguel sairá por ${precoFinal}`;





    //criar um elemento do js para o html com o comando createElement("tag html");
}


