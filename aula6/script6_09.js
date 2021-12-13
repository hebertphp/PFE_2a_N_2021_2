var num=[10,20,30,40,50,70];
var i,msg;
msg="";
var meses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for(i=0;i<=12;i++){
    msg+=i+"<hr>";
}
document.querySelector(".teste").innerHTML=msg;