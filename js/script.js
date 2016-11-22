$(document).ready(function() {

	// $(window).load(function() {
	// 	 $("#screenwash").animate({top:"0px"}, 2000, "swing");
	// 	});

	// $('#readybtn').click(function(){
	// 	$("#screenwash").animate({top:"-100%"}, 2500, "swing");
	// });


	var width300 = window.matchMedia("(min-width: 300px)");
	var width350 = window.matchMedia("(min-width: 350px)");
	var width400 = window.matchMedia("(min-width: 400px)");
	var width450 = window.matchMedia("(min-width: 450px)");
	var width500 = window.matchMedia("(min-width: 500px)");
	var width550 = window.matchMedia("(min-width: 550px)");
	var width600 = window.matchMedia("(min-width: 600px)");
	var width650 = window.matchMedia("(min-width: 650px)");
	var width700 = window.matchMedia("(min-width: 700px)");
	var width750 = window.matchMedia("(min-width: 750px)");
	var width800 = window.matchMedia("(min-width: 800px)");
	var width850 = window.matchMedia("(min-width: 850px)");
	var width900 = window.matchMedia("(min-width: 900px)");
	var width950 = window.matchMedia("(min-width: 950px)");
	var width1000 = window.matchMedia("(min-width: 1000px)");
	var width1050 = window.matchMedia("(min-width: 1050px)");
	var width1100 = window.matchMedia("(min-width: 1100px)");
	var width1150 = window.matchMedia("(min-width: 1150px)");
	var width1200 = window.matchMedia("(min-width: 1200px)");
	var width1250 = window.matchMedia("(min-width: 1250px)");
	var width1300 = window.matchMedia("(min-width: 1300px)");
	var width1350 = window.matchMedia("(min-width: 1350px)");
	var width1400 = window.matchMedia("(min-width: 1400px)");
	var width1440 = window.matchMedia("(min-width: 1440px)");


// media query event handler
if (matchMedia) {
	var width300 = window.matchMedia("(min-width: 300px) and (max-width: 349px)");
	width300.addListener(WidthChange1);
	WidthChange1(width300);
}
if (matchMedia) {
	var width350 = window.matchMedia("(min-width: 350px) and (max-width: 399px)");
	width350.addListener(WidthChange2);
	WidthChange2(width350);
}
if (matchMedia) {
	var width400 = window.matchMedia("(min-width: 400px) and (max-width: 449px)");
	width400.addListener(WidthChange3);
	WidthChange3(width400);
}
if (matchMedia) {
	var width450 = window.matchMedia("(min-width: 450px) and (max-width: 499px)");
	width450.addListener(WidthChange4);
	WidthChange4(width450);
}
if (matchMedia) {
	var width500 = window.matchMedia("(min-width: 500px) and (max-width: 549px)");
	width500.addListener(WidthChange5);
	WidthChange5(width500);
}
if (matchMedia) {
	var width550 = window.matchMedia("(min-width: 550px) and (max-width: 599px)");
	width550.addListener(WidthChange6);
	WidthChange6(width550);
}
if (matchMedia) {
	var width600 = window.matchMedia("(min-width: 600px) and (max-width: 649px)");
	width600.addListener(WidthChange7);
	WidthChange7(width600);
}
if (matchMedia) {
	var width650 = window.matchMedia("(min-width: 650px) and (max-width: 699px)");
	width650.addListener(WidthChange8);
	WidthChange8(width650);
}
if (matchMedia) {
	var width700 = window.matchMedia("(min-width: 700px) and (max-width: 749px)");
	width700.addListener(WidthChange9);
	WidthChange9(width700);
}
if (matchMedia) {
	var width750 = window.matchMedia("(min-width: 750px) and (max-width: 799px)");
	width750.addListener(WidthChange10);
	WidthChange10(width750);
}

// media query change
function WidthChange1(width300) {
	if (width300.matches) {
    	// window width is at 300px
    	var randomTop = Math.floor(Math.random(675) * 0);
    	var randomLeft = Math.floor(Math.random(1140) * 0);
    	window.open("link1.html",'_blank', "resizable=yes,width=300,height=200,top=100,left=200");
    }
}

function WidthChange2(width350) {
	if (width350.matches) {
    	// window width is at 350px
    	var randomTop = Math.floor(Math.random(675) * 0);
    	var randomLeft = Math.floor(Math.random(1140) * 0);
    	window.open("link2.html",'_blank', "resizable=yes,width=300,height=200,top=100,left=500");
    } 
}

function WidthChange3(width400) {
	if (width400.matches) {
    	// window width is at 400px
    	var randomTop = Math.floor(Math.random(675) * 0);
    	var randomLeft = Math.floor(Math.random(1140) * 0);
    	window.open("link3.html",'_blank', "resizable=yes,width=300,height=200,top=100,left=1000");
    }
}

function WidthChange4(width450) {
	if (width450.matches) {
    	// window width is at 450px
    	var randomTop = Math.floor(Math.random(675) * 0);
    	var randomLeft = Math.floor(Math.random(1140) * 0);
    	window.open("link4.html",'_blank', "resizable=yes,width=300,height=200,top=400,left=200");
    } 
}

function WidthChange5(width500) {
	if (width500.matches) {
  		// window width is at 500px
  		var randomTop = Math.floor(Math.random(675) * 0);
  		var randomLeft = Math.floor(Math.random(1140) * 0);
  		window.open("link5.html",'_blank', "resizable=yes,width=300,height=200,top=400,left=500");
  	} 
  }




});

