var nota=[10,8,6,7,9];//var do tipo array
//        0  1 2 3 4
var x, msg,i;
var uf=["SP","RJ","MG","ES"];
//       0    1    2     3
x=uf[0];
switch(x){
    case "SP":
        msg="São Paulo";
    break;
    case "RJ":
        msg="Rio de Janeiro";
    break;
    default:
        msg="Valor não encontrado";
}
document.querySelector(".teste").innerHTML=x+" - "+msg;
