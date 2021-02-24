$(document).ready(function(){
    
var typed = new Typed('.type', {
    strings: [" Web Designer", " Freelancer","Enterpreneur","Wordpress Developer"],
    typeSpeed: 60,
    backSpeed:60,
   loop:true,
 
  });

// portfolio part 

$('.list').click(function(){
    const value  = $(this).attr('data-filter');
    
    if(value == 'all'){
        $('.itemBox').show('1000');
    }else{
        $('.itemBox').not('.'+value).hide('1000');
        $('.itemBox').filter('.'+value).show('1000');
    }
    
    //add active class on selected item
   
 

});



$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// var selector = $(this).attr('data-filter');
// $('.designs').isotope({
//     filter: selector
// });
//  return false

// owl carousel 

$('.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    autoplay: true,
    dots: true,
   mouseHoverPause: true,
    smartSpeed: 800,
    
})

// scrolling-active window 

    $(window).scroll(function(){
        var windowPosition = window.scrollY > 10;
  

         $("header").toggleClass("scrolling-active", windowPosition);

    });
 $(window).scroll(function(){
        var topWindow = window.scrollY > 900;

        $('footer .arrow').toggleClass('back-to-top', topWindow);
        
 

 });

 // Scroll Reveal animation 

 var slideUP1 = {
     distance: '100px',
     origin: 'top',
     opacity: 0,
     duration: 1000,
     delay: 300,

 }
var slideUp2 = {
    distance: '80px',
    origin:   'left',
    duraiton: 1000,
    opacity: 0,
    delay: 300,
    
};
var slideUp3 = {
    distance : '80px',
    origin: 'right',
    duration: 1000,
    delay: 300,
 
    opacity: 0,

};
var slideUp4 = {
    distance : '80px',
    origin: 'bottom',
    duration: 1000,
    delay: 300,
   
    opacity: 0
};

ScrollReveal().reveal('.animate-top', slideUP1);
ScrollReveal().reveal('.animate-left', slideUp2);
ScrollReveal().reveal('.animate-right', slideUp3);
ScrollReveal().reveal('.animate-bottom', slideUp4);
});



