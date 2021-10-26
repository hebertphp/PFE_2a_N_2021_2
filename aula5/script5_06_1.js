var login, valor;
login=prompt("Digite o login");
senha=prompt("Digite a senha");
if(login=="Jose" && senha=="1234"){
    document.write("Bem vindo Jose");
}
else if(login=="Maria"){
    document.write("Bem vinda Maria");
}
else if(login=="Joaquina"){
    document.write("Bem vinda Joaquina");
}
else{
    document.write("Quem é você???");
}