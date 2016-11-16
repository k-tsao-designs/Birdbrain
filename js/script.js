$(document).ready(function() {

var mq = window.matchMedia( "(min-width: 500px)" );

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
    window.open("link1.html",'_blank', "resizable=yes,width=300,height=200,top=100,left=200");
  } 
}



});

