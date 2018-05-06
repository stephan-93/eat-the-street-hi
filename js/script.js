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

/*var square = $('#all-events .event-listing');


$(window).on('resize load', function(){
square.find('li').each(function(fn, i) {
$(this).find('.h1').removeClass("oversized extra-oversized");
if (square.width() != square.height()) {
$(this).find('.h1').addClass("extra-oversized");}
if (square.width() != square.height()) {
$(this).find('.h1').addClass("oversized");}
})
})*/

// SIZE ART MANIPULATION

$(document).ready(function(){

  // reveal point from bottom and top of the window
  var windowssize = window.innerHeight;
  var revealerpoint = windowssize * .25;
  // console.log(revealerpoint);
  // console.log(windowssize);
  window.addEventListener('scroll', reveal);
  reveal();

  function reveal() {
    console.log("scrolling");
    var sideart = document.querySelectorAll('.side-art');
    for (var i = 0; i < sideart.length; i++) {
      var windowheight = window.innerHeight;
      var revealertop = sideart[i].getBoundingClientRect().top;
      var revealerbottom = sideart[i].getBoundingClientRect().bottom;
      // console.log(revealertop);
      // console.log(revealerbottom);

      if (window.innerWidth > 767) {
        if (revealertop < windowheight - revealerpoint) {
          sideart[i].classList.add('active')
        }
        else {
          sideart[i].classList.remove('active');
        };
        if (revealerbottom < 0 + revealerpoint) {
          sideart[i].classList.remove('active');
        }
      }
      else {
        if (revealertop < windowheight - revealerpoint) {
          sideart[i].classList.remove('active')
        }
        else {
          sideart[i].classList.add('active');
        };
        if (revealerbottom < 0 + revealerpoint) {
          sideart[i].classList.add('active');
        }
      };
    }
  };
})
