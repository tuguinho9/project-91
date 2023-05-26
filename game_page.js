jogador1 = localStorage.getItem("jogador1");
jogador2 = localStorage.getItem("jogador2");
pontuação1 = 0;
pontuação2 = 0;
document.getElementById("player1_name").innerHTML = jogador1 + ":";
document.getElementById("player2_name").innerHTML = jogador2 + ":";
document.getElementById("pontuação1").innerHTML = pontuação1;
document.getElementById("pontuação2").innerHTML = pontuação2;
document.getElementById("turno-pergunta").innerHTML = "Turno de pergunta " + jogador1;
document.getElementById("turno-resposta").innerHTML = "Turno de resposta " + jogador2;
function enviar() {
    number1 = document.getElementById("resposta1").value;
    number2 = document.getElementById("resposta2").value;
    actualAwnser = parseInt(number1) * parseInt(number2);
    questionNumber = "<h4>" + number1 + "X" + number2 + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id= input_check_box";
    check_button = "<br><br><button class= 'btn btn-info' onclick= 'check()'>Checar</button>";
    row = questionNumber + inputBox + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("resposta1").value = "";
    document.getElementById("resposta1").value = "";
}