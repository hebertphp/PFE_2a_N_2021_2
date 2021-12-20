function media(nota1,nota2){
    return (nota1+nota2)/2;

}

var num=media(8,7);

document.write ("Num = "+num+"<br>");
document.querySelector("#saida").innerHTML="Num = "+num;

document.write(media(10,6));
document.querySelector(".d1").innerHTML=media(10,6);

media(9,8);//para ninguém, para o além