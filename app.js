function calBtn(newChar) {

    let cal = document.getElementById("inputField");
    let lastChar = cal.value.slice(-1);
    
    if ((lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")
        && (newChar === "+" || newChar === "-" || newChar === "*" || newChar === "/")) {
        cal.value = cal.value.slice(0, -1);
        } else if (newChar == "=") {
            cal.value = eval(cal.value);
        } else {
            cal.value += newChar;
        }
}

