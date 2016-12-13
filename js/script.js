$(document).ready(function() {

	$(window).load(function() {
		 $("#screenwash").animate({top:"0px"}, 2000, "swing");
		});

	function hideText() {
        $("#screenwash").css({display: "none"});
    }

	$('#readybtn').click(function(){
		$("#screenwash").animate({top:"-100%"}, 2500, "swing");
		setTimeout(hideText,2500);
	});

	var width400 = window.matchMedia("(min-width: 400px) and (max-width: 405px)");
	var width450 = window.matchMedia("(min-width: 450px) and (max-width: 455px)");
	var width500 = window.matchMedia("(min-width: 500px) and (max-width: 505px)");
	var width550 = window.matchMedia("(min-width: 550px) and (max-width: 555px)");
	var width600 = window.matchMedia("(min-width: 600px) and (max-width: 605px)");
	var width650 = window.matchMedia("(min-width: 650px) and (max-width: 655px)");
	var width700 = window.matchMedia("(min-width: 700px) and (max-width: 705px)");
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
	var width1440 = window.matchMedia("(min-width: 100%)");

	var height175 = window.matchMedia("(min-height: 175px)");
	var height225 = window.matchMedia("(min-height: 225px)");
	var height275 = window.matchMedia("(min-height: 275px)");
	var height325 = window.matchMedia("(min-height: 325px)");
	var height375 = window.matchMedia("(min-height: 375px)");
	var height425 = window.matchMedia("(min-height: 425px)");
	var height475 = window.matchMedia("(min-height: 475px)");
	var height525 = window.matchMedia("(min-height: 525px)");
	var height575 = window.matchMedia("(min-height: 575px)");
	var height625 = window.matchMedia("(min-height: 625px)");
	var height675 = window.matchMedia("(min-height: 675px)");
	var height725 = window.matchMedia("(min-height: 725px)"); /*defunct in this screen*/
	var height740 = window.matchMedia("(min-height: 740px)");


// media query event handler
if (matchMedia) {
	var width400 = window.matchMedia("(min-width: 400px) and (max-width: 405px)");
	width400.addListener(WidthChange1);
	WidthChange1(width400);
}
if (matchMedia) {
	var width450 = window.matchMedia("(min-width: 450px) and (max-width: 455px)");
	width450.addListener(WidthChange2);
	WidthChange2(width450);
}
if (matchMedia) {
	var width500 = window.matchMedia("(min-width: 500px) and (max-width: 505px)");
	width500.addListener(WidthChange3);
	WidthChange3(width500);
}
if (matchMedia) {
	var width550 = window.matchMedia("(min-width: 550px) and (max-width: 555px)");
	width550.addListener(WidthChange4);
	WidthChange4(width550);
}
if (matchMedia) {
	var width600 = window.matchMedia("(min-width: 600px) and (max-width: 605px)");
	width600.addListener(WidthChange5);
	WidthChange5(width600);
}
if (matchMedia) {
	var width650 = window.matchMedia("(min-width: 650px) and (max-width: 655px)");
	width650.addListener(WidthChange6);
	WidthChange6(width650);
}
if (matchMedia) {
	var width700 = window.matchMedia("(min-width: 700px) and (max-width: 705px)");
	width700.addListener(WidthChange7);
	WidthChange7(width700);
}
if (matchMedia) {
	var width750 = window.matchMedia("(min-width: 750px) and (max-width: 755px)");
	width750.addListener(WidthChange8);
	WidthChange8(width750);
}
if (matchMedia) {
	var width800 = window.matchMedia("(min-width: 800px) and (max-width: 805px)");
	width800.addListener(WidthChange9);
	WidthChange9(width800);
}
if (matchMedia) {
	var width850 = window.matchMedia("(min-width: 850px) and (max-width: 855px)");
	width850.addListener(WidthChange10);
	WidthChange10(width850);
}

if (matchMedia) {
	var width900 = window.matchMedia("(min-width: 900px) and (max-width: 905px)");
	width900.addListener(WidthChange11);
	WidthChange11(width900);
}
if (matchMedia) {
	var width950 = window.matchMedia("(min-width: 950px) and (max-width: 955px)");
	width950.addListener(WidthChange12);
	WidthChange12(width950);
}
if (matchMedia) {
	var width1000 = window.matchMedia("(min-width: 1000px) and (max-width: 1005px)");
	width1000.addListener(WidthChange13);
	WidthChange13(width1000);
}
if (matchMedia) {
	var width1050 = window.matchMedia("(min-width: 1050px) and (max-width: 1055px)");
	width1050.addListener(WidthChange14);
	WidthChange14(width1050);
}
if (matchMedia) {
	var width1100 = window.matchMedia("(min-width: 1100px) and (max-width: 1105px)");
	width1100.addListener(WidthChange15);
	WidthChange15(width1100);
}
if (matchMedia) {
	var width1150 = window.matchMedia("(min-width: 1150px) and (max-width: 1155px)");
	width1150.addListener(WidthChange16);
	WidthChange16(width1150);
}
if (matchMedia) {
	var width1200 = window.matchMedia("(min-width: 1200px) and (max-width: 1205px)");
	width1200.addListener(WidthChange17);
	WidthChange17(width1200);
}
if (matchMedia) {
	var width1250 = window.matchMedia("(min-width: 1250px) and (max-width: 1255px)");
	width1250.addListener(WidthChange18);
	WidthChange18(width1250);
}
if (matchMedia) {
	var width1300 = window.matchMedia("(min-width: 1300px) and (max-width: 1305px)");
	width1300.addListener(WidthChange19);
	WidthChange19(width1300);
}
if (matchMedia) {
	var width1350 = window.matchMedia("(min-width: 1350px) and (max-width: 1355px)");
	width1350.addListener(WidthChange20);
	WidthChange20(width1350);
}
if (matchMedia) {
	var width1400 = window.matchMedia("(min-width: 1400px) and (max-width: 1405px)");
	width1400.addListener(WidthChange21);
	WidthChange21(width1400);
}
if (matchMedia) {
	var width1440 = window.matchMedia("(width: 100%)");
	width1440.addListener(WidthChange22);
	WidthChange22(width1440);
}


if (matchMedia) {
	var height175 = window.matchMedia("(min-height: 175px) and (max-height: 180px)");
	height175.addListener(HeightChange1);
	HeightChange1(height175);
}
if (matchMedia) {
	var height225 = window.matchMedia("(min-height: 225px) and (max-height: 230px)");
	height225.addListener(HeightChange2);
	HeightChange2(height225);
}
if (matchMedia) {
	var height275 = window.matchMedia("(min-height: 275px) and (max-height: 280px)");
	height275.addListener(HeightChange3);
	HeightChange3(height275);
}
if (matchMedia) {
	var height325 = window.matchMedia("(min-height: 325px) and (max-height: 330px)");
	height325.addListener(HeightChange4);
	HeightChange4(height325);
}
if (matchMedia) {
	var height375 = window.matchMedia("(min-height: 375px) and (max-height: 380px)");
	height375.addListener(HeightChange5);
	HeightChange5(height375);
}
if (matchMedia) {
	var height425 = window.matchMedia("(min-height: 425px) and (max-height: 430px)");
	height425.addListener(HeightChange6);
	HeightChange6(height425);
}
if (matchMedia) {
	var height475 = window.matchMedia("(min-height: 475px) and (max-height: 480px)");
	height475.addListener(HeightChange7);
	HeightChange7(height475);
}
if (matchMedia) {
	var height525 = window.matchMedia("(min-height: 525px) and (max-height: 530px)");
	height525.addListener(HeightChange8);
	HeightChange8(height525);
}
if (matchMedia) {
	var height575 = window.matchMedia("(min-height: 575px) and (max-height: 580px)");
	height575.addListener(HeightChange9);
	HeightChange9(height575);
}
if (matchMedia) {
	var height625 = window.matchMedia("(min-height: 625px) and (max-height: 630px)");
	height625.addListener(HeightChange10);
	HeightChange10(height625);
}
if (matchMedia) {
	var height675 = window.matchMedia("(min-height: 675px) and (max-height: 680px)");
	height675.addListener(HeightChange11);
	HeightChange11(height675);
}
if (matchMedia) {
	var height725 = window.matchMedia("(min-height: 715px) and (max-height: 725px)");
	height725.addListener(HeightChange12);
	HeightChange12(height725);
}
if (matchMedia) {
	var height740 = window.matchMedia("(min-height: 740px) and (max-height: 745px)");
	height740.addListener(HeightChange13);
	HeightChange13(height740);
}

var winW400;
var winW450;
var winW500;
var winW550;
var winW600;
var winW650;
var winW700;
var winW750;
var winW800;
var winW850;
var winW900;
var winW950;
var winW1000;
var winW1050;
var winW1100;
var winW1150;
var winW1200;
var winW1250;
var winW1300;
var winW1350;
var winW1400;
var winW1440;

var winH175;
var winH225;
var winH275;
var winH325;
var winH375;
var winH425;
var winH475;
var winH525;
var winH575;
var winH625;
var winH675;
var winH725;
var winH740;


// media query change
function WidthChange1(width400) {
	if (width400.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 150) + 100);
    	var Height = 40+randomWidth*2.1;
    	winW400 = window.open("link1.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW400.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW400.close() }, randomTime);
    }
}

function WidthChange2(width450) {
	if (width450.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.75;
    	winW450 = window.open("link2.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW450.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW450.close() }, randomTime);
    } 
}

function WidthChange3(width500) {
	if (width500.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 250) + 150);
    	var Height = 40+randomWidth*1.456;
    	winW500 = window.open("link3.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW500.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW500.close() }, randomTime);
   }
}

function WidthChange4(width550) {
	if (width550.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*1.1235;
    	winW550 = window.open("link4.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW550.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW550.close() }, randomTime);
    } 
}

function WidthChange5(width600) {
	if (width600.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.7575;
  		winW600 = window.open("link5.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW600.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW600.close() }, randomTime);
  	} 
}

function WidthChange6(width650) {
	if (width650.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 150) + 100);
    	var Height = 40+randomWidth*1.926;
  		winW650 = window.open("link6.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW650.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW650.close() }, randomTime);
  	} 
}

function WidthChange7(width700) {
	if (width700.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.98;
  		winW700 = window.open("link7.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW700.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW700.close() }, randomTime);
  	} 
}

function WidthChange8(width750) {
	if (width750.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.9284;
  		winW750 = window.open("link8.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW750.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW750.close() }, randomTime);
  	} 
}

function WidthChange9(width800) {
	if (width800.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.7112;
  		winW800 = window.open("link9.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW800.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW800.close() }, randomTime);
  	} 
}

function WidthChange10(width850) {
	if (width850.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.5289;
  		winW850 = window.open("link10.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW850.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW850.close() }, randomTime);
  	} 
}

function WidthChange11(width900) {
	if (width900.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.6464;
  		winW900 = window.open("link11.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW900.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW900.close() }, randomTime);
  	} 
}

function WidthChange12(width950) {
	if (width950.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.8843;
  		winW950 = window.open("link12.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW950.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW950.close() }, randomTime);
  	} 
}

function WidthChange13(width1000) {
	if (width1000.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.625;
  		winW1000 = window.open("link13.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1000.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1000.close() }, randomTime);
  	} 
}

function WidthChange14(width1050) {
	if (width1050.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.5916;
  		winW1050 = window.open("link14.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1050.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1050.close() }, randomTime);
  	} 
}

function WidthChange15(width1100) {
	if (width1100.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.4095;
  		winW1100 = window.open("link15.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top="+ randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1100.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1100.close() }, randomTime);
  	} 
}

function WidthChange16(width1150) {
	if (width1150.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.662;
  		winW1150 = window.open("link16.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1150.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1150.close() }, randomTime);
  	} 
}

function WidthChange17(width1200) {
	if (width1200.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
  		winW1200 = window.open("link17.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + randomWidth + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1200.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1200.close() }, randomTime);
  	} 
}

function WidthChange18(width1250) {
	if (width1250.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.89157;
  		winW1250 = window.open("link18.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1250.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1250.close() }, randomTime);
  	} 
}

function WidthChange19(width1300) {
	if (width1300.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.7862;
  		winW1300 = window.open("link19.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1300.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1300.close() }, randomTime);
  	} 
}

function WidthChange20(width1350) {
	if (width1350.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 150) + 100);
    	var Height = 40+randomWidth*1.986;
  		winW1350 = window.open("link20.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1350.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1350.close() }, randomTime);
  	} 
}

function WidthChange21(width1400) {
	if (width1400.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*1.115;
  		winW1400 = window.open("link21.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1400.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1400.close() }, randomTime);
  	} 
}

function WidthChange22(width1440) {
	if (width1440.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.45;
  		winW1440 = window.open("link22.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	setTimeout(winW1440.focus, 0);
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winW1440.close() }, randomTime);
  	} 
}







function HeightChange1(height175) {
	if (height175.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.751;
    	winH175 = window.open("link23.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH175.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH175.close() }, randomTime);
    }
}

function HeightChange2(height225) {
	if (height225.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.94;
    	winH225 = window.open("link24.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH225.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH225.close() }, randomTime);
    } 
}

function HeightChange3(height275) {
	if (height275.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 150) + 100);
    	var Height = 40+randomWidth*2.1525;
    	winH275=window.open("link25.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH275.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH275.close() }, randomTime);
    }
}

function HeightChange4(height325) {
	if (height325.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.7591;
    	winH325=window.open("link26.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH325.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH325.close() }, randomTime);
    } 
}

function HeightChange5(height375) {
	if (height375.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.366;
    	winH375=window.open("link27.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH375.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH375.close() }, randomTime);
    }
}

function HeightChange6(height425) {
	if (height425.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.9107;
    	winH425=window.open("link28.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH425.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH425.close() }, randomTime);
    } 
}

function HeightChange7(height475) {
	if (height475.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.8896;
    	winH475 = window.open("link29.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH475.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH475.close() }, randomTime);
    }
}

function HeightChange8(height525) {
	if (height525.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.603865;
    	winH525=window.open("link30.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH525.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH525.close() }, randomTime);
    } 
}

function HeightChange9(height575) {
	if (height575.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.665;
    	winH575=window.open("link31.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH575.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH575.close() }, randomTime);
    }
}

function HeightChange10(height625) {
	if (height625.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.946;
    	winH625=window.open("link32.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH625.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH625.close() }, randomTime);
    } 
}

function HeightChange11(height675) {
	if (height675.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 225) + 125);
    	var Height = 40+randomWidth*1.4725;
    	winH675 = window.open("link33.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH675.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH675.close() }, randomTime);
    }
}

function HeightChange12(height725) {
	if (height725.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.9364;
    	winH725 = window.open("link34.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH725.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH725.close() }, randomTime);
    } 
}

function HeightChange13(height740) {
	if (height740.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	var randomWidth = Math.floor((Math.random() * 300) + 150);
    	var Height = 40+randomWidth*0.8173;
    	winH740 = window.open("link35.html",'_blank', "resizable=yes,width=" + randomWidth + ",height=" + Height + ",top=" + randomTop +",left=" + randomLeft +"");
    	winH740.focus();
    	var randomTime = Math.floor((Math.random() * 60000) + 5000);
    	setTimeout(function(){ winH740.close() }, randomTime);
    } 
}

// $(window).on("orientationchange",function(){
//     var iframe = document.createElement('iframe');
// 		iframe.frameBorder=0;
// 		iframe.width="50%";
// 		iframe.height="50%";
// 		// iframe.id="randomid";
// 	    iframe.src = link34.html;
//     document.body.appendChild(iframe);
// });

});

