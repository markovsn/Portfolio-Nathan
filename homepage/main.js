const burger = document.querySelector('#burger')
const iconX = burger.querySelector('.icon-x')
const iconBurger = burger.querySelector('.icon-burger')
const menu = document.querySelector('#modal-menu')
const nav = document.querySelector('#nav')

burger.addEventListener('click', function() {
    menu.classList.toggle('hidden')
    iconX.classList.toggle('hidden')
    iconBurger.classList.toggle('hidden')
    nav.classList.toggle('hidden')

})

jQuery(function($) {
    $(window).scroll(function(){
     if($(window).scrollTop() >50) {
    $("#nav").addClass("nav-solid");}
    
    else {
    $("#nav").removeClass("nav-solid");}
    });
    });

