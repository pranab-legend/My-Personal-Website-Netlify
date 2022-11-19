function random(start, range){
  let getRandom = Math.floor((Math.random() * range) + start);
  while (getRandom > range) {
    getRandom =  Math.floor((Math.random() * range) + start);
  }
  return getRandom;
}

function $(id) {
  var getId = document.getElementById(id.toString());
  return getId;
}

var generateBtn = $("generateBtn");
function generateRandomNum() {
  const firstNumber = parseInt($('first-number').value);
  const secondNumber = parseInt($('second-number').value);
  const result = $("result"); 
  let randomNum = random(firstNumber, secondNumber);
  result.innerHTML = randomNum.toString();
}

generateBtn.addEventListener("click", generateRandomNum);
