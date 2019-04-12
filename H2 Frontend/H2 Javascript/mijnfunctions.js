function afmelden(){
    var antwoord = confirm('Wilt u zich afmelden>');
    if(antwoord == true){
        alert('U wordt afgemeld!!!');
    }
}

function dollarKoers(){
    return(1.36);
}
function euroKoers(){
    return(0.74);
}
function dollar_naar_euro(dollar){
    return(dollar * euroKoers());
}
dollar_naar_euro(100)

function wissel(bedrag, valuta){
    if(valuta == 'euro'){
        return(bedrag * dollarKoers());
    }
    else if(valuta == 'dollar'){
        return(bedrag * euroKoers());
    }
}