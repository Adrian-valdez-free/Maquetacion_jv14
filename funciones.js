$(document).ready(function() {


  new WOW().init();

   $('#boton_menu').click(function(e){
  $('#menu').toggleClass("abrir_Menu").removeClass("cerrar_menu");
  });

  $('.btn_ancla').click(function(){
    $("#menu").toggleClass("cerrar_menu").removeClass("abrir_Menu");
  }); 

  $(function() {
   $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: false,    // Boolean: Pause when hovering controls, true or false
  prevText: '<i class="fa-solid fa-circle-chevron-left"></i>',   // String: Text for the "previous" button
  nextText: '<i class="fa-solid fa-circle-chevron-right"></i>',       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
  });
  });

  Fancybox.bind("[data-fancybox]", {
  // Your custom options
  
});
});