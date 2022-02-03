setTimeout("Logo()",500);
setTimeout("Screen()",800);
setTimeout("Logo_non()",1300);
    
function Logo(){
$("#logo_min").animate({"top":50,"opacity":0,},300,"swing");
}

function Screen(){
$("#screen").animate({"height":"0"},200,"swing");
}


