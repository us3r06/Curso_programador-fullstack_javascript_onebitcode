alert("Seja bem-vindo ao sistema de navegação espacial Jarvis.");
let nameSpaceship = prompt("Digite o nome da nave espacial: ");
let countDobras = 0;
let choseOption ="";
while(choseOption ==1) {
    choseOption = prompt("Deseja entrar em dobra espacial?\nDigite: \n1-Sim\n2-Não");
    if(choseOption==1){
        countDobras+=1;
    }
}

alert("Nave Espacial: "+nameSpaceship+"\nQuantidade de dobras: "+countDobras);