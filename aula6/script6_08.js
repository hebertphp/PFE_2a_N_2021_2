   var num=[10,20,30,40,50,70];
//POSIÇÕES  0  1  2  3  4  5
//LENGTH 6    
var tam;
tam=num.length;//
document.querySelector("#dv1").innerHTML="var num possui "+tam+" valores<hr>";
document.querySelector("#dv1").innerHTML+="Todos os valores da var num: "+num+"<hr>";

document.querySelector(".teste").innerHTML="Valor da primeira posição de num: "+num[0]+"<hr>";
document.querySelector(".teste").innerHTML+="Valor da última posição de num: "+num[tam-1]+"<hr>";