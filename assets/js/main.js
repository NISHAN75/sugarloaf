(function ($) {
   $(document).ready(function () {

    // nice select
    $('select').niceSelect();
   

   //  mobile menu open 
   $(".menu-info").click(function(e){
      e.preventDefault();
      $(this).next(".sub-menu").slideToggle();
      $(this).toggleClass("active");
    });

      


 
   
       
       
       
       
   });
})(jQuery);

