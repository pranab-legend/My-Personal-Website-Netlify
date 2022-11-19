function $(id) {
    var getId = document.getElementById(id.toString());
    return getId;
}

const btn = $("enter-btn");
const inputVal1 = $("numtext1").value;
const inputVal2 = $("numtext2").value;
const result = $("result-label");
const operation = $("operation").value;
console.log(btn, inputVal1, inputVal2, result, operation)
let resultNum =  0;
function generateAnswer() {

    switch (operation) {
        case "+":
            resultNum = inputVal1 + inputVal2;
            break;
        case "-":
            resultNum = inputVal1 - inputVal2;
            break;
        case "*":
            resultNum = inputVal1 * inputVal2;
            break;
        case "/":
            resultNum = inputVal1 / inputVal2;
            break;
        case "%":
            resultNum = inputVal1 % inputVal2;
            break;
    }
    result.innerHTML = `Answer: ${resultNum}`;
}

btn.addEventListener("click", generateAnswer);