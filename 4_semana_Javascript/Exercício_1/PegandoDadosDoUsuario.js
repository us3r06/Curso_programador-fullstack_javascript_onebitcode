alert("Bem Vindo");
var nome = prompt("Digite o Seu nome: ");
var idade = prompt("Digite a sua idade");
var idadeComfirmed = confirm("Sua idade é: " + idade);
if (idadeComfirmed == true) {
    alert("Nome: " + nome + "\n" + "Idade: " + idade);
}
else {
    alert("Problema seu que errou!");
}
