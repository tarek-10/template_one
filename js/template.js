$(function () {
    //fancybox
   $('.fancybox').fancybox(); 
   //Solutoin Section
   $('.one').css('display','block');
   $('.accordion .title').click(function () {
       $(this).next().slideToggle();
       $('.accordion .desc').not($(this).next()).slideUp();
   });
   //Study Section
   $('.download').click(function() {
    $('.timer').countTo();

   });

   //Recently Section
   var mixer = mixitup('.myImages');

   //nice scroll
   $(function() {  
    $("body").niceScroll();
});
});
