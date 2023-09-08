let eyob = document.getElementById("btn-num1");
let kebede = document.getElementById("btn-num2");
// let ayele = document.getElementById("score-1");
let count = 0;

function score() {
 eyob.textContent = count ++;
}

function scoreTwo() {
  count+=2;
  eyob.textContent = count;
}

function scoreThree() {
  count+=3;
  eyob.textContent = count;
}

function scoreFour() {
  kebede.textContent = count ++;
 }

 function scoreFive() {
  count+=2;
  kebede.textContent = count;
}

function scoreSix() {
  count+=3;
  kebede.textContent = count;
}


 