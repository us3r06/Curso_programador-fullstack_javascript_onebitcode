let nameSpaceship = prompt("digite o nome da nave espacial: ");
let charSub = prompt("Qual caractere você deseja substituir?: ");
let charSubstituto = prompt("Por qual caracteres você deseja substituir: "+charSub+"?");
let newNameSpaceship ="";

for(let i=0; i<nameSpaceship.length; i++){
    if(nameSpaceship[i] == charSub){
        newNameSpaceship+=charSubstituto;
    }
    else {
        newNameSpaceship+=nameSpaceship[i];
    }
}

alert("Nome nave espacial: "+nameSpaceship+"\nNome novo: "+newNameSpaceship);