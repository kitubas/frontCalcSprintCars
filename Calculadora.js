
function Calcular() {
        // window.alert('funfando')
    // let pacientes = document.querySelectorAll(".paciente");//a tabela se comporta como array a partir de pacinetes agnt contecta com o dado que agnt vai utilizar.
    // let tempoAno=document.querySelector('#opcoesTempo');//vamo fzr para cada option, só foi de teste.
    // let kilometragem=document.querySelector('#opcoesKm');//vamo fzr para cada option, só foi de teste.




    let nomeDoCarro = document.getElementById('inputModelo');
    let nomeCarro = String(nomeDoCarro.value);

    let tempoFicaria = document.getElementById('opcoesTempo');
    let tempoFicariaSelecionado = tempoFicaria.options[tempoFicaria.selectedIndex].text;


    let kilometragem = document.getElementById('opcoesKm');
    let kilometragemSelecionada = kilometragem.options[kilometragem
                                    .selectedIndex].text;






    _1ano = "1 ano";
    _100kmMes = ""

    window.alert(tempoFicariaSelecionado + kilometragemSelecionada)

}


