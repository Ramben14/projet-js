let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secretNumber = Math.floor(Math.random() * 100);
let attempts = 5;

button.onclick = function(){
    const input = document.getElementById("input");
    if(input.value != ""){

        if(input.value < secretNumber){
            message.innerText = 'le nombre est plus grand ' + input.value ;
            message.style.color = "#6495ED";
        }

    }else{
        message.innerText = "le champs est vide ";
        message.style.color="red";
    }
}