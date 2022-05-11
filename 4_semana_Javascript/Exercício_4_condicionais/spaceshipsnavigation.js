let namePilot = prompt("Olá piloto, digite o seu nome: ");
let velocitySpaceships = 0;
while(1){
    let velocityIntendeed = prompt("digite a velocidade para qual deseja acelerar a nave em km/s: ");
    if(confirm("Você deseja acelerar a velocidade da nave para: "+velocityIntendeed+"km/s") == true){
        velocitySpaceships = velocityIntendeed;
        break;
    }
}
if(velocitySpaceships <=0){
    alert("A nave está parada. Considere partir e aumentar a velocidade");
}
else if(velocitySpaceships<40 ){
    alert("Você está devagar, podemos aumentar a velocidade.");
}
else if(velocitySpaceships>=40 && velocitySpaceships<=80){
    alert("Parece uma boa velocidade para manter.");
}
else if(velocitySpaceships>80 && velocitySpaceships<=100){
    alert("Velocidade alta, considere diminuir.");
}
else if(velocitySpaceships>100){
    alert("Velocidade perigosa, controle automático forçado.");
}
alert("Piloto: "+namePilot+"\n"+"Velocidade: "+velocitySpaceships);