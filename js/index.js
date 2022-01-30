function getValue(val){
    document.calc.screen.value+=val;
}

function result(){
    let op = document.calc.screen.value;
    document.calc.screen.value = eval(op);
}

function del(){
    let screen = document.calc.screen.value;
    document.calc.screen.value = screen.slice(0,-1)
}