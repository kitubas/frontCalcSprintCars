let campoFiltro = document.querySelector("#inputModelo")

// primeiro passo:colocar um escultador de evento
// passar um função anoni quando alguém clicar naquele campo
campoFiltro.addEventListener("input", function () {
    resposta.innerHTML = ' '
    console.log(this.value)
    // this está represt o dono do evento =>campoFiltro 

    // conforme vai digitando pode comparar com todos os nomes da tabela os que forem iguais mostra e os que forem diferentes vão ficar escondidos
    let nomeDoCarro = document.getElementById("inputModelo");
    let nomeCarro = String(nomeDoCarro.value);
    nomeCarro=['kwid', 'uno', 'renegade', 'camaro'];



    // se tiver algo digitado vai entrar na condição
    if (this.value.length > 0) {
        // aplicação de um loop para pegar os pacientes da tabela

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        

        
        // criando uma expressão relugar
        // pode passar duas coisas oq vc quer que ela busque
        for (let i = 0; i < nomeCarro.length; i++) {

            nomeCarro[i]
            



            let expressao = new RegExp(this.value, 'i')//i=case insensitive//O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).


            // esconder o nome do paciente
            // no if vc testa pra ver se tem esse conteúdo
            if (expressao.test(nomeCarro[0])) {
                
                img.setAttribute('src', 'img/kwid.png');
               
            }
            else if (expressao.test(nomeCarro[1])) {

                img.setAttribute('src', 'img/uno.png');
                
                
            }
            else if (expressao.test(nomeCarro[2])) {
                
                img.setAttribute('src', 'img/renegade.png');
                
            }
            else if (expressao.test(nomeCarro[3])) {
                
                img.setAttribute('src', 'img/camaro.png');
                
            }

            resposta.appendChild(img);

        }
        
       
    }

    

});
