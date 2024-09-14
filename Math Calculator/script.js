function $(id) {
    var getId = document.getElementById(id.toString());
    return getId;
}

const btn = $("enter-btn");
var inputVal1 = $("numtext1").value;
var inputVal2 = $("numtext2").value;
var result = $("result-label");
var operation = $("operation").value;
console.log(btn, inputVal1, inputVal2, result, operation)
let resultNum =  0;
function generateAnswer() {
    inputVal1 = $("numtext1").value;
    inputVal2 = $("numtext2").value;
    operation = $("operation").value;
    console.log(btn, inputVal1, inputVal2, result, operation)

    switch (operation) {
        case "+":
            resultNum = parseInt(inputVal1) + parseInt(inputVal2);
            break;
        case "-":
            resultNum = parseInt(inputVal1) - parseInt(inputVal2);
            break;
        case "*":
            resultNum = parseInt(inputVal1) * parseInt(inputVal2);
            break;
        case "/":
            resultNum = parseInt(inputVal1) / parseInt(inputVal2);
            break;
        case "%":
            resultNum = parseInt(inputVal1) % parseInt(inputVal2);
            break;
    }
    result.innerHTML = `Answer: ${resultNum}`;
}

btn.addEventListener("click", generateAnswer);