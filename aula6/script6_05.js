var x=[2020,2,"Hoje"];
x[0]++;//2021
x[1]=x[0]%2;//1
x[2]+=" em dia";//Hoje em dia

document.querySelector("#dv1").innerHTML=x[0]+"<br>";
document.querySelector("#dv1").innerHTML+=x[1]+"<br>";
document.querySelector("#dv1").innerHTML+=x[2]+"<br>";
/*
document.write(x[0]+"<br>");
document.write(x[1]+"<br>");
document.write(x[2]+"<br>");
imprimir x[0] x[1] x[2] usando querySelector 
*/