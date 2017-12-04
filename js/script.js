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


})

// document.onscroll = function() {
//
//   //console.log("scrolling!");
//
//   var anim = document.querySelectorAll('.side-art');
//   var i;
//   for (i = 0; i < anim.length; i++) {
//         anim[i].classList.addClass('off');
//   }
// };

//REPLACE LAST SPACE OF PARAGUAPHS WITH NON-BREAK SPACE
$('p').each(function(){
  var string = $(this).html();
  string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
  $(this).html(string);
});

//RESIZE OVERSIDED TEXT IN LISTING

var square = $('#all-events .event-listing li');

$(document).ready(function(){
  alert("Hello World!");
  // square.each(function(){
  //     if (square.width() != square.height()) {
  //       $('#all-events .event-listing li .h1').addClass("oversized");
  //     } else {
  //       $('#all-events .event-listing li .h1').removeClass("oversized");}
  // })
})
