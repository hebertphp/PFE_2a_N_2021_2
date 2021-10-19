var entrada_login, entrada_senha, res;
const login="hokage";
const senha="1234";

entrada_login=prompt("Digite seu login");
entrada_senha=prompt("Digite a sua senha");

res=(login == entrada_login) && (senha == entrada_senha) ? "Acesso ok!" : "Acesso negado!";

document.write(res);