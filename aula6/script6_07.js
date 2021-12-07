var semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA","SEXTA", "SÁBADO"];
var msg="";
for (var i = 0; i < 7; i+=1){//i++
    msg+=semana[i] + " é o " + (i+1) + "o dia da semana!<br>";
}
document.querySelector("#dv1").innerHTML=msg;
/*
document.write("<hr>");
i=1;
document.write(semana[i] + " é o " + (i+1) + "o dia da semana!<br>");
*/