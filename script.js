

function miscela() {
var x = document.getElementById("myText").value;

var x2 = parseFloat(x);

var finale1 = (1000 * 2 * x2)/(98);

var finale = parseInt(finale1);

document.getElementById("box2").innerHTML = "Ti servono " + finale + "ml di olio miscela";
}
