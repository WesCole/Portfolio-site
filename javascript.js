var burger = document.querySelector('.burger i');
var nav = document.querySelector('nav');


function toggleNav(){
    document.querySelector('nav').style.top= 45; 
}


burger.addEventListener('click', function(){
    toggleNav();
});