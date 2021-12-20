function soma(...num){
    var resultado=0;
    // resultado = num[0]+num[1]+num[2];
    for(var i=0;i<num.length;i++){
        resultado+=num[i];
    }
    return resultado;
}
    document.write(soma("+",17,10,3,4,5,6,7,8,9,0,6,4,3,2,2,45,8,1));