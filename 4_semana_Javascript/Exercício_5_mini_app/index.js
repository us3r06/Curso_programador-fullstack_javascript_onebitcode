let departureDateEntry = prompt("Digite a data de partida da nave: (Formato DD/MM/YYYY)");
let departuredate = moment(departureDateEntry, "DD/MM/YYYY");
let today = moment();
let dateDiff = today - departuredate;
let choseoption = prompt("Escolha como gostaria de exibir o te,po de partida:\n1-Segundos\n2-Minutos\n3-Horas\n4-Dias");
if(choseoption=="1"){
    let secondsOfDeparture = Math.round(dateDiff/1000);
    alert("Tempo de voo: "+secondsOfDeparture+" Segundos");
}
else if(choseoption=="2"){
    let minutesOfDeparture = Math.round((dateDiff/1000)/60);
    alert("Tempo de voo: "+minutesOfDeparture+" Minutos");
}
else if(choseoption=="3"){
    let hoursOfDepartures = Math.round(dateDiff/1000/3600);
    alert("Tempo de voo: "+hoursOfDepartures+" Horas");
}
else if(choseoption=="4"){
    let daysOfDeparture = Math.round(dateDiff/1000/3600/24);
    alert("Tempo de voo: "+daysOfDeparture+" Dias");
}
else{
    alert("Opção inválida");
}