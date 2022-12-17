let input = document.getElementById("input");
let output = document.getElementById("output");
let btn_backspace = document.getElementById("btn_backspace");
let btn_clear = document.getElementById("btn_clear");
let buttonEval = document.getElementById("buttonEval");

window.addEventListener('DOMContentLoaded',()=>{
    output.value = "0";
    input.value = "";
});

function pressNum(entrada){
    input.value += entrada; 
}

function pressDot(entrada){
    //console.log(input.value.slice(-1))
    if (!isNaN(input.value.slice(-1)))
        input.value += entrada; 
}

function pressTec(entrada){
    input.value += entrada;
}

btn_backspace.addEventListener('click',function(){
    input.value = input.value.slice(0,-1);
});

btn_clear.addEventListener('click',()=>{
    input.value = "";
    output.value = "0";
});

buttonEval.addEventListener('click',()=>{
    let resultado = input.value;

    if (resultado.includes("√")) {
        resultado = resultado.replace(/√/g, "Math.sqrt(") + ")";
    }
    
    if (resultado.includes("ⁿ")) {
        resultado = "Math.pow(" + resultado.replace(/ⁿ/g, ", ") + ")";
    }
    try {
        let result;
        result = eval(resultado);
        //console.log(result);

        if (result.toString().indexOf(".") !== -1) {
            result = result.toFixed(4);
        }

        output.value = result;

        output.classList.toggle('animate__fadeInUp');

    } catch (error) {
        output.value = error;
    }
});