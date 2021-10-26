var num,calc;
num=parseInt(prompt("Digite um número"));

calc=num%2;// 0 ou 1

if(calc == 0){
    document.write(num+" - PAR");
}
else{
    document.write(num+" - Ímpar");
}

/*
Elaborar um código Javascript para dado um número inteiro, verificar se o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/