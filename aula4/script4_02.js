var a,b,res;
a=prompt("Digite um número");
a=parseInt(a);//5 //valor de entrada   //parseFloat
b=prompt("Digite outro número");
b=parseInt(b);//2  //valor de entrada
document.write("<div class='saida'>");
document.write ("soma: "+ (a+b));//7
document.write ("<br>subtração: "+ (a-b));//3
document.write ("<br>multiplicação: "+ (a*b));//10
document.write ("<br>Divisão: "+ (a/b));//2.5
document.write ("<br>resto da divisão: "+(a%b));//1
document.write ("<br>exponenciação: "+ (a**b));//5*5 //25
res = a/b;
res= parseInt(res);//formatei a saída
document.write ("<br>res: "+ res);//5*5 //25
document.write("</div>");
/*
sete e meio 7.5  
todo numero impar resto da divisão por 2 = 1
todo numero par   resto da divisão por 2 = 0
*/