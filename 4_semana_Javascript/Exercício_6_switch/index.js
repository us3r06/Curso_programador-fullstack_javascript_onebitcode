distAnosLuz = prompt("Digite em anos-luz a distância a qual deseja converter:");
chooseOption = prompt("Para qual unidade deseja converter\n1- Parsec(pc)\n 2- Unidade astronônima(AU)\n3- Quilômetro(km)");
switch (chooseOption) {
    case '1':
        let convertedParsec = distAnosLuz * 0.306601;
        alert("Distância em anos-luz: "+distAnosLuz+"\nParsec: "+convertedParsec);
        break;
    case '2':
        let convertedAu = distAnosLuz * 63241.1;
        alert("Distância em anos-luz: "+distAnosLuz+"\nUnidade astronônima: "+convertedAu);
        break;
    case '3':
        let convertedKm = distAnosLuz * Math.pow(10,12);
        alert("Distância em anos-luz: "+distAnosLuz+"\nQuilômetros(km): "+convertedKm);
        break;

    default:
        alert("Distância em anos-luz: "+distAnosLuz+"\nUnidade não identificada: Conversão fora do escopo");
        break;
}