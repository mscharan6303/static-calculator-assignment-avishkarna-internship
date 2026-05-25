function add(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let data = document.getElementById("display").value;
    document.getElementById("display").value = eval(data);
}