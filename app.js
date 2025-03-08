


function calculate(value){


    let input = document.getElementById("input")
    let lastVal = input.value.slice(-1)

    if((lastVal == "+" || lastVal == "-" || lastVal == "*" || lastVal == "/")
        && (value == "+" || value == "-" || value == "*" || value == "/")){
    input.value = input.value.slice(0, -1) + value
    }else if(value == "="){
        input.value = eval(input.value)
    }else if(value == "bSpc"){
        input.value = input.value.slice(0,-1)
    }
    else{
        input.value += value
    }
}




// function calBtn(newChar) {

//     let cal = document.getElementById("inputField");
//     let lastChar = cal.value.slice(-1);
    
//     if ((lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")
//         && (newChar === "+" || newChar === "-" || newChar === "*" || newChar === "/")) {
//         cal.value = cal.value.slice(0, -1);
//         } else if (newChar === "=") {
//             cal.value = eval(cal.value);
//         }else if (newChar === "C"){
//             cal.value = "";
//         } else {
//             cal.value += newChar;
//         }
// }


