document.addEventListener('DOMContentLoaded', function() {

  //TOGGLE MENU NAV
  var menubutton = document.querySelectorAll('.menu-button');
  var i;
  for (i = 0; i < menubutton.length; i++) {
    menubutton[i].onclick = function(){
      this.classList.toggle("expanded");
    }
  }

  //TOGGLE ACCORDIAN
  var acc = document.querySelectorAll('.accordian');
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].getElementsByTagName('h4')[0].onclick = function(){
      this.parentElement.classList.toggle("open");
    }
  }

  //BALANCE PARAGRAPHS
  balanceText($('.text-centered'));

})

//REPLACE LAST SPACE OF PARAGUAPHS WITH NON-BREAK SPACE
$(document).ready(function(){
$('p').each(function(){
  var string = $(this).html();
  string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
  $(this).html(string);
});
})

//RESIZE OVERSIDED TEXT IN LISTING

var square = $('#all-events .event-listing');


$(window).on('resize load', function(){
  square.find('li').each(function(fn, i) {
    $(this).find('.h1').removeClass("oversized extra-oversized");
    if (square.width() != square.height()) {
      $(this).find('.h1').addClass("extra-oversized");}
      if (square.width() != square.height()) {
        $(this).find('.h1').addClass("oversized");}
  })
})

// SIZE ART MANIPULATION

/*$('.side-art').addClass('off');

 // $(function() {
   $(window).on('resize load', function(){
  if ($(window).width() < 769) {
    $('.side-art').addClass('off');
    $(window).on("scrollstart",function() {
      $('.side-art').toggleClass('off');})
    $(window).on("scrollstop",function() {
      $('.side-art').toggleClass('off');})
  } else {
    $('.side-art').removeClass('off');
  }
  })
// })*/

$.event.special.scrollstop.latency = 900;
