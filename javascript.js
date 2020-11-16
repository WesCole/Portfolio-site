var burger = document.querySelector('.burger i');
var nav = document.querySelector('nav');


function toggleNav(){
    nav.classList.toggle('nav-active');
}


burger.addEventListener('click', function(){
    toggleNav();
});

