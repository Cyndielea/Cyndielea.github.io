

var countSkype = 0; 
var countYoutube = 900; 
var countGoogle = 900;

(function(){
    // do some stuff
    countSkype ++;
    $(".skype").html(countSkype);
    

    if (countSkype >= 2279) return;
    setTimeout(arguments.callee, 0.01);
})();


(function(){
    // do some stuff
    countYoutube+=10;
    $(".Youtube").html(countYoutube);
    

    if (countYoutube >= 131565) return;
    setTimeout(arguments.callee, 0.01);
})();

(function(){
    // do some stuff
    countGoogle+=10;
    $(".Google").html(countGoogle);
    

    if (countGoogle >= 56343) return;
    setTimeout(arguments.callee, 0.01);
})();
