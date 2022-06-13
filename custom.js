// Botão C - clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
    // no #display, limpando número informado

})

// botão -> BackSpace

const BackSpace = () =>{
    const num = document.querySelector("#display").value.slice(0, -1);
    // declarando constante NUM e tirando -1 número em #display, da direita pra esquerda
    
    document.querySelector("#display").value = num;
    // igualando e atualizando NUM no #display
    

}

// one function
const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "1"
    }
}

// two function
const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "2"
    }
}

// three function
const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "3"
    }
}

// four function
const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "4"
    }
}

// five function
const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "5"
    }
}

// six function
const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "6"
    }
}

// seven function
const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "7";
    }
}

// eight function
const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "8";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "8";
    }
}

// one function
const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "9";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "9";
    }
}

// zero function
const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "0";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "0";
    }
}

// double zero function
const double = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "00";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + "00";
    }
}

// one function
const point = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value =  document.querySelector("#display").value + ".";
    }
}

// git repository origin https://github.com/profluizangelo/VsCodeIntro.git/ //
