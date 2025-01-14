function luckyNo(){
    var birthdate =  prompt("what is your birthdate in order of dd ?");
     var n = Math.random();
     var b = n*birthdate;
     var luckyNo = Math.floor(b);
     alert('YOUR LUCKY NO IS ' + luckyNo + ' !');

}