function soma(...num){
    var resultado=0;
    // resultado = num[0]+num[1]+num[2];
    for(var i=0;i<num.length;i++){
        resultado+=num[i];
    }
    return resultado;
}
    document.write(soma(17,10,3,4,5)); 
    //                  0  1  2 3 4