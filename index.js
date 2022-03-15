const menu = document.querySelector('#mobile-menu');
const menulinks =document.querySelector('.navbar_menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});



var f = (function (){
    var words = ["Monsters Cafe","The Pumpkin Party","The Haloween Night"] ,
    i =0;
    setInterval(function(){
        $('#word').fadeOut(function(){
            $(this).html(words[(i = (i+1) % words.length)]).fadeIn();
        });

    },2000)

})(f);

