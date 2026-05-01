
function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0, -1);
}

function calculate() {
    let exp = document.getElementById("display").value;

    try {
        exp = exp.replace(/sin\(/g, "Math.sin(convertTrig(");
        exp = exp.replace(/cos\(/g, "Math.cos(convertTrig(");
        exp = exp.replace(/tan\(/g, "Math.tan(convertTrig(");
        exp = exp.replace(/log\(/g, "Math.log10(");
        exp = exp.replace(/ln\(/g, "Math.log(");
        exp = exp.replace(/sqrt\(/g, "Math.sqrt(");
        exp = exp.replace(/\^/g, "**");

        let result = eval(exp);

        document.getElementById("display").value = result;

        addHistory(exp + " = " + result);

    } catch (e) {
        alert("Invalid Expression");
    }
}

function addHistory(text) {
    let history = document.getElementById("history");
    let item = document.createElement("div");
    item.innerText = text;
    history.prepend(item);
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") calculate();
    else if (event.key === "Backspace") backspace();
    else document.getElementById("display").value += event.key;
});