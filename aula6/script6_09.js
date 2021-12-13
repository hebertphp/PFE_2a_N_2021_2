var num=[10,20,30,40,50,70];
var i,msg;
msg="";
var meses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for(i=0;i<meses.length;i++){
    msg+=meses[i]+"<hr>";
}
document.querySelector("#dv1").innerHTML=meses.length;
document.querySelector(".teste").innerHTML=msg;