document.getElementsByTagName("body")[0].innerHTML = "<div id = 'spazio'></div>";
document.getElementById("spazio").innerHTML += "<button id = 'btn1' onClick = 'one()'></button>";
document.getElementById("spazio").innerHTML += "<div id = 'quad1'></div>";
document.getElementById("spazio").innerHTML += "<button id = 'btn2' onClick = 'two()'></button>";
document.getElementById("spazio").innerHTML += "<div id = 'quad2'></div>";
document.getElementById("spazio").innerHTML += "<button id = 'btn3' onClick = 'tree()'></button>";
document.getElementById("spazio").innerHTML += "<div id = 'quad3'></div>";
 
let btn1 = document.getElementById("btn1");
let quad1 = document.getElementById("quad1");
let btn2 = document.getElementById("btn2");
let quad2 = document.getElementById("quad2");
let btn3 = document.getElementById("btn3");
let quad3 = document.getElementById("quad3");
 
let spazio = document.getElementById("spazio");
 
spazio.style.height = "300px";
spazio.style.width = "200px";
spazio.style.display = "flex";
spazio.style.flexDirection = "row";
spazio.style.flexWrap = "wrap";
 
btn1.style.height = "100px";
btn1.style.width = "100px";
 
btn2.style.height = "100px";
btn2.style.width = "100px";
 
btn3.style.height = "100px";
btn3.style.width = "100px";
 
quad1.style.height = "100px";
quad1.style.width = "100px";
quad1.style.backgroundColor = "magenta";
 
quad2.style.height = "100px";
quad2.style.width = "100px";
quad2.style.backgroundColor = "grey";
 
quad3.style.height = "100px";
quad3.style.width = "100px";
quad3.style.backgroundColor = "green";
 
function one() {
 let a = Math.floor(Math.random()*100);
 document.getElementById("quad1").innerHTML = a;
}
 
function two() {
 let x = Math.floor(Math.random()*26);
 let lettere = "abcdefghijklmnopqrstuvwxyz";
 document.getElementById("quad2").innerHTML = lettere[x];
}
 
function tree() {
 let r = Math.floor(Math.random()*256);
 let g = Math.floor(Math.random()*256);
 let b = Math.floor(Math.random()*256);
 
 quad3.style.backgroundColor = "rgb("+ r +", "+ g +", "+ b +")";
}




<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3EZM1HTF5C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3EZM1HTF5C');
</script>
