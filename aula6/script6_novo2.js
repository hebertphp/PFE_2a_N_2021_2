var x, msg, i, j, s;
var uf=["SP","RJ","MG","ES"];
//       0    1    2   3
x=[10,3,5];
//  0 1 2
msg="";s=0;
//i++  i+=1
for(i=0;i<=3;i+=1){
    // msg+=i+" ";
    msg+=i+" "+uf[i]+"<br>";
}
document.querySelector(".teste").innerHTML=msg;

j=0;
while(j<=2){
  s+=x[j];//
  j++;
}
document.querySelector(".teste").innerHTML=s;
