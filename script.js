let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');


const secretNumber = Math.floor(Math.random() * 150);
let attempts = 10; 

button.oneclick = function(){
    const input = document .getElementById("input"); 
    if(input.value != ""){

        if(input.value< secretNumber){
            message.innerText= "le nombre est plus grand"; + input.value + '';
            message.style.color = "black";
        }else if (input.value > secretNumber){
            message.innerText= "le nombre est plus petit"; + input.value + '';
            message.style.color = "black";
        }
        if (attempts ==0)
        message.innerText= "dommage vous avez perdu , il fallait trouvé " + secretNumber +'';
        message.style.color = "red";
        form.style.color = "none";
        link.style.display = 'flex';

    }else {
        message.innerText = "est vide";
        message.style.color="red";

    }
}