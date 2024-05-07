(function ($) {
   $(document).ready(function () {

    // nice select
    $('select').niceSelect();
   

   //  mobile menu open 
   $(".menu-info").click(function(e){
      e.preventDefault();
      let currentSubMenu = $(this).next(".sub-menu");
      currentSubMenu.slideToggle();
      $(".sub-menu").not(currentSubMenu).slideUp();
      $(this).toggleClass("active");
      $(".menu-info").not($(this)).removeClass("active");
    });

   //  counter js
   $('.counter').counterUp();



      


 
   
       
       
       
       
   });
})(jQuery);

