function display(value) {
    document.getElementById('textarea').value += value;
}

function calculate() {
    var x = document.getElementById('textarea').value;
    var y = eval(x);
    document.getElementById('textarea').value = y;
}

function clr() {
    document.getElementById('textarea').value = "";
}