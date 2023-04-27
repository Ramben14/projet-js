let button = document.getElementById('button');
let formulaire = document.getElementById('formulaire');
let message = document.getElementById('message');
let lien = document.getElementById('lien');

const secretNumber = Math.floor(Math.random() * 100);
let attempts = 4 ;

button.onclick = function(){
    const input = document.getElementById("input");
    if(input.value != ""){

        if(input.value < secretNumber){
            message.innerText = 'le nombre est plus grand que :  ' + input.value +'' ;
            message.style.color = "#6495ED";
        }else if (input.value > secretNumber){
            message.innerText = 'le nombre est plus petit que : ' + input.value +'' ;
            message.style.color = "#6495ED";


        }
        if(attempts == 0){
            message.innerText = "Dommage  Vous avez perdu , il fallait trouvé : " + secretNumber;
            message.style.color ="red";
            formulaire.style.display = "none";
            lien.style.display ="flex";

        }
        attempts--;

        if(input.value == secretNumber){
             message.innerText = "Bravo , c'est le bon nombre " + secretNumber ;
             message.style.color ="green";
             formulaire.style.display = "none";
            lien.style.display ="flex";
    }
    }else{
        message.innerText = "le champs est vide ";
        message.style.color="red";
    }
}