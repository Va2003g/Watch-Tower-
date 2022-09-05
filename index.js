var hamburger = document.getElementById('hamburger');
var res_nav = document.getElementById('res-nav');
var back = document.getElementById("back");
// console.log(back,res_nav);
function showResNav(){
    res_nav.style.visibility="visible";
    
}

function hideResNav(){
    res_nav.style.visibility="hidden";
}

hamburger.addEventListener('click',showResNav);
back.addEventListener('click',hideResNav);
