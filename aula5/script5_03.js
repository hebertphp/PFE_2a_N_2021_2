var num,res;
num=prompt("Digite um número");
num=parseInt(num);
res=num%2;
if(res==0){
 document.write(num+" - PAR");
}
else{
 document.write(num+" - ÍMPAR");
}
