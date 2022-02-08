class Calculator{
    constructor(prevText,currentText){
        this.prevText = prevText;
        this.currentText = currentText;
        this.current = "";
        this.prev = "";
    }

    setNumber(number){
        if (this.current.includes(".") && number === ".") return;
        this.current += number.toString();    
    }
    
    setOperator(operator){
        if(this.current === "") return;
        if(this.prev !=="") this.getResult();
        this.operator = operator;
        this.prev = this.current + this.operator;
        this.current = "";
        
    }

    getResult(){
        let operation = this.prev + this.current;
        this.prev = operation + "=";
        this.current = eval(operation);
    }

    clearDisplay(){
        this.operator = undefined;
        this.prev = "";
        this.current = "";
    }

    delDisplay(){
        this.current = this.current.slice(0,-1);
    }
    
    updateDisplay(){
        this.currentText.innerHTML = this.current;
        this.prevText.innerHTML = this.prev;
    }
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const prev = document.querySelector("#prev");
const current = document.querySelector("#current");
const history = document.querySelector(".history");
const calculator = new Calculator(prev,current);

numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        calculator.setNumber(number.innerHTML);
        calculator.updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", ()=>{
        calculator.setOperator(operator.innerHTML);
        calculator.updateDisplay();
    });
});

equals.addEventListener("click", () => {
    calculator.getResult();
    calculator.updateDisplay();
});

clear.addEventListener("click", () => {
    calculator.clearDisplay();
    calculator.updateDisplay();
});

del.addEventListener("click", () => {
    calculator.delDisplay();
    calculator.updateDisplay();
    toggle();
});

function toggle(){
    var x = document.getElementById("historyDisplay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

history.addEventListener("click", ()=>{
    toggle();
});