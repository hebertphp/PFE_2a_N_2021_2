var num=[10,20,30,40,50,70];
var tam;
tam=num.length;
document.querySelector("#dv1").innerHTML="var num possui "+tam+" valores<hr>";
document.querySelector("#dv1").innerHTML+="Todos os valores da var num: "+num+"<hr>";

document.querySelector("#dv1").innerHTML+="Valor da primeira posição de num: "+num[0]+"<hr>";
document.querySelector("#dv1").innerHTML+="Valor da última posição de num: "+num[tam-1]+"<hr>";