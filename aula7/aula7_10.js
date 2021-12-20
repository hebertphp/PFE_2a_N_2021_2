function par_impar(){
    document.write(x);
    if(x%2==0){
        let msg=" PAR<br>";//escopo local/bloco
        document.write(msg);
    }
    else{
        var msg=" ÍMPAR<br>";//escopo local/bloco
        document.write(msg);
    }
    // document.write(msg);
}
    var x=28;//escopo global
    par_impar();document.write("<hr>");
    var x=29;//escopo global
    par_impar();