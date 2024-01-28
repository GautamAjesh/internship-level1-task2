
var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMin = currentTime.getMinutes();

var greeting;

if (currentHour < 12) {
    greeting = `Good morning! , ${currentHour}:${currentMin}`;
} else if (currentHour < 18) {
    greeting = `Good afternoon! , ${currentHour}:${currentMin}`;
} else {
    greeting = `Good evening! , ${currentHour}:${currentMin}`;
}

alert(greeting);


document.addEventListener("DOMContentLoaded", function () {
    var resultInput = document.getElementsByName("result")[0];
    var buttons = document.querySelectorAll(".calculator button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var buttonText = this.textContent;

            switch (buttonText) {
                case "C":
                    resultInput.value = "";
                    break;
                case "backspace":
                    resultInput.value = resultInput.value.slice(0, -1);
                    break;
                case "%":
                case "/":
                case "*":
                case "-":
                case "+":
                    resultInput.value += " " + buttonText + " ";
                    break;
                case "=":
                    try {
                        resultInput.value = eval(resultInput.value);
                    } catch (error) {
                        resultInput.value = "Error";
                    }
                    break;
                default:
                    resultInput.value += buttonText;
                    break;
            }
        });
    });

    var equalBtn = document.querySelector(".equal");
    equalBtn.style.backgroundColor = "red";

    equalBtn.addEventListener("click", function () {
        if(equalBtn.style.backgroundColor == "red"){
            this.style.backgroundColor = "blue";
        }else{
            equalBtn.style.backgroundColor = "red";
        }
        
    });
    
});





