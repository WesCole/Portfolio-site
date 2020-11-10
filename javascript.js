const burger = document.getElementsByClassName('burger i');
const nav = document.querySelector('nav');

burger.addEventlistener('click',function(){
    nav.toggle;
})