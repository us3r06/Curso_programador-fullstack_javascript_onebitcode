let nameSpaceship = prompt("Digite o nome da nave espacial: ");
let nameReverse="";
for(let i=nameSpaceship.length-1; i>=0; i--){
    if(nameSpaceship[i]=="e"||nameSpaceship[i]=="E"){
        break;
    }
    else{
        nameReverse += nameSpaceship[i];
    }
}
alert("Nome original da nave: "+nameSpaceship+"\nNome após ocultação: "+nameReverse);