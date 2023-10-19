function clearScreen() {
    document.getElementById("search").value = "";
    }
    
    function display(value) {
    document.getElementById("search").value += value;
    }
    
    function calculate() {
    var p = document.getElementById("search").value;
    var q = eval(p);
    document.getElementById("search").value = q;
}