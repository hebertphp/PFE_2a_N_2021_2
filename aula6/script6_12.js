var notas=[10,9,8];
var outras_notas=[4,3,2,1];
document.write(notas+"<hr>");//10,9,8
var novas_notas=notas.concat(7,6,5);
document.write(novas_notas+"<hr>");//10,9,8,7,6,5
var junta_tudo=novas_notas.concat(outras_notas);
document.write(junta_tudo+"<hr>");//10,9,8,7,6,5,4,3,2,1