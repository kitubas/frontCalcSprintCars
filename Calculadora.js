

function Calcular() {
  let nomeDoCarro = document.getElementById("inputModelo");
  let nomeCarro = String(nomeDoCarro.value);

  let resultAluguel = document.getElementById("resulado-aluguel");
  let tituloH2 = document.getElementById("titulo-h2-resultado");
  // resultAluguel.innerHTML='';


  let resultadoPesquisa = document.getElementById("resultado_pesquisa");


  resultadoPesquisa.style.display = "contents";

  // Pesquisar();


  //lista dos carros
  let carros = ["kwid", "uno", "renegade", "camaro"];

  //porcetagem
  let primeiraPorcento = 0.1;
  let segundaPorcento = 0.15;

  //tempo-anos
  let tempo1 = "1 ano";
  let tempo2 = "2 anos";
  let tempo3 = "3 anos";
  //kilometragem
  let km1 = "100 km";
  let km2 = "200 km";
  let km3 = "300 km";

  let tempoFicaria = document.getElementById("opcoesTempo");
  let tempoFicariaSelecionado =
    tempoFicaria.options[tempoFicaria.selectedIndex].text;

  let kilometragem = document.getElementById("opcoesKm");
  let kilometragemSelecionada =
    kilometragem.options[kilometragem.selectedIndex].text;

  console.log(kilometragemSelecionada);

  let precoInicial = precoBase(nomeCarro);

  let precoFinal = calcularPrecoFinal(
    precoInicial,
    tempoFicariaSelecionado,
    kilometragemSelecionada
  );

  ///validações
  erro(carros, nomeCarro);


  ////////////// carregar tabela
  criarTabela(
    campoFiltro,
    carros,
    tempoFicariaSelecionado,
    kilometragemSelecionada
  );
  //////////////////////

  /////////////////////////////////////
  //seção resposta
  ////////////////////////////////////


  let Tagh2 = document.createElement("h2");
  tituloH2.innerHTML = ' '

  Tagh2.innerHTML = 'Resposta';
  Tagh2.classList.add("titulo-resposta");
  tituloH2.appendChild(Tagh2);



  resultAluguel.appendChild(resultado);
  resultAluguel.classList.add("secao-respota");


  resultado.innerHTML = `O aluguel sairá por ${precoFinal}R$.`;



  //criar um elemento do js para o html com o comando createElement("tag html");

  //função pesquisar



  //////////////////////////////////
  //funções//
  //////////////////////////////////


  function erro(nomes, carroSelecionado) {
    try {
      if (nomes.indexOf(carroSelecionado) === -1 && carroSelecionado.length > 0) {

        resultAluguel.classList.remove("secao-respota")
        window.alert("⚠ Esse modelo não se encontra em nossa frota!");
        ;
        //Recarrega página do servidor (força novo GET)
        window.location.reload(true);
        throw new ReferenceError("envie os parametros")

      }

      if (nomeCarro.length === 0) {
        resultAluguel.classList.remove("secao-respota");
        //Recarrega página do servidor (força novo GET)
        window.location.reload(true);
        window.alert("⚠ escolha um modelo de carro!");
        throw new TypeError('Escolha um moldelo')


      }
    }
    //o catch caputra o erro
    catch (error) {
      if (error instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError")
        console.log(error.message)
        console.log(error.stack)
      }
      else if (error instanceof TypeError) {
        console.log("Este erro é um TypeError")
        console.log(error.message)
        console.log(error.stack)
      }
      else {
        console.log('Tipo de erro não esperado:' + error)
      }

    }


  }

  function criarTabela(
    carroSelecionado,
    carrosPossiveis,
    tmp,
    kilometragem
  ) {
    let tbody = document.querySelector("#tabela-carros");
    tbody.innerHTML = " ";

    let precoInicial = precoBase(carroSelecionado);
    let precoTermina = calcularPrecoFinal(precoInicial, tmp, kilometragem);

    let carroTr = montarTr(
      carroSelecionado,
      tmp,
      kilometragem,
      precoTermina
    );
    carroTr.classList.add("carro");
    // carroTr.style.border='solid 2px #000'
      //retira esse carro selecionado na lista
    let busca = carrosPossiveis.indexOf(carroSelecionado);
    
    

    //adiciona os outros carros da lista
    for (let i = 0; i < carrosPossiveis.length; i++) {
      let precoComeca = precoBase(carrosPossiveis[i]);
      let precoFinal = calcularPrecoFinal(
        precoComeca,
        tempoFicariaSelecionado,
        kilometragemSelecionada
      );

      let carroTrFor = montarTr(
        carrosPossiveis[i],
        tmp,
        kilometragem,
        precoFinal
      );

      console.log(carroTrFor);
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
    let td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
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
    let td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
  }

  function calcularPrecoFinal(precoComeca, tmpSelect, kmSelect) {
    if (tmpSelect === tempo1 && kmSelect === km1) {
      return precoComeca;
    } else {
      return Number(
        precoComeca +
        proporcaoQtdKm(precoComeca, kmSelect) +
        calcularProporcaoTempo(precoComeca, tmpSelect)
      );
    }
  }

  //'kwid', 'uno', 'renegade', 'camaro'
  //preço base = O carro rodando 100 km em um ano
  function precoBase(nome) {
    if (nome == "kwid") return 1000;
    if (nome == "uno") return 1500;
    if (nome == "renegade") return 2000;
    if (nome == "camaro") return 3000;
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

}
