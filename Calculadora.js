//calculadora sprintcar
//Autores:Henrique Leite e Antonio Alves

function procurarNome() {
    let nomessss = document.getElementById('inputModelo');
    let nomeCarro = String(nomessss.value);
    let img=document.createElement('img');
    img.setAttribute('id', 'foto');
   
  

    if (nomeCarro.length === 0) {
        window.alert('escolha um modelo de carro!');
    }
    else {
        if (nomeCarro === "kwid") {
            
            

            img.setAttribute('src' , 'img/kwid.png');

           
            
        }
        
    
        else if (nomeCarro === "renegade") {

            img.setAttribute('src' , 'img/renegade.png');

        
        }
      
    
        else if (nomeCarro === "uno") {

            
            img.setAttribute('src' , 'img/uno.png');

        
        }
       
    
        else if (nomeCarro === "camaro") {

            img.setAttribute('src' , 'img/camaro.png');

        
        }
        
    }
   
    
    resposta.appendChild(img);
    
    
    
}



