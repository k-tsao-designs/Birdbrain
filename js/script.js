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

/*
	//attempting to close all windows other than current
	var windows = [];
	//each time you open a new window, simply add it like this:
	windows.push(window.open('http://google.com', '_blank'));

	//then you can iterate over them and close them all like this:
	for(var i = 0; i < windows.length; i++){
	    windows[i].close()
	}
*/


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



// media query event handler
if (matchMedia) {
	var width400 = window.matchMedia("(min-width: 400px) and (max-width: 449px)");
	width400.addListener(WidthChange1);
	WidthChange1(width400);
}
if (matchMedia) {
	var width450 = window.matchMedia("(min-width: 450px) and (max-width: 499px)");
	width450.addListener(WidthChange2);
	WidthChange2(width450);
}
if (matchMedia) {
	var width500 = window.matchMedia("(min-width: 500px) and (max-width: 549px)");
	width500.addListener(WidthChange3);
	WidthChange3(width500);
}
if (matchMedia) {
	var width550 = window.matchMedia("(min-width: 550px) and (max-width: 599px)");
	width550.addListener(WidthChange4);
	WidthChange4(width550);
}
if (matchMedia) {
	var width600 = window.matchMedia("(min-width: 600px) and (max-width: 649px)");
	width600.addListener(WidthChange5);
	WidthChange5(width600);
}
if (matchMedia) {
	var width650 = window.matchMedia("(min-width: 650px) and (max-width: 699px)");
	width650.addListener(WidthChange6);
	WidthChange6(width650);
}
if (matchMedia) {
	var width700 = window.matchMedia("(min-width: 700px) and (max-width: 749px)");
	width700.addListener(WidthChange7);
	WidthChange7(width700);
}
if (matchMedia) {
	var width750 = window.matchMedia("(min-width: 750px) and (max-width: 799px)");
	width750.addListener(WidthChange8);
	WidthChange8(width750);
}
if (matchMedia) {
	var width800 = window.matchMedia("(min-width: 800px) and (max-width: 849px)");
	width800.addListener(WidthChange9);
	WidthChange9(width800);
}
if (matchMedia) {
	var width850 = window.matchMedia("(min-width: 850px) and (max-width: 899px)");
	width850.addListener(WidthChange10);
	WidthChange10(width850);
}

if (matchMedia) {
	var width900 = window.matchMedia("(min-width: 900px) and (max-width: 949px)");
	width900.addListener(WidthChange11);
	WidthChange11(width900);
}
if (matchMedia) {
	var width950 = window.matchMedia("(min-width: 950px) and (max-width: 999px)");
	width950.addListener(WidthChange12);
	WidthChange12(width950);
}
if (matchMedia) {
	var width1000 = window.matchMedia("(min-width: 1000px) and (max-width: 1049px)");
	width1000.addListener(WidthChange13);
	WidthChange13(width1000);
}
if (matchMedia) {
	var width1050 = window.matchMedia("(min-width: 1050px) and (max-width: 1099px)");
	width1050.addListener(WidthChange14);
	WidthChange14(width1050);
}
if (matchMedia) {
	var width1100 = window.matchMedia("(min-width: 1100px) and (max-width: 1149px)");
	width1100.addListener(WidthChange15);
	WidthChange15(width1100);
}
if (matchMedia) {
	var width1150 = window.matchMedia("(min-width: 1150px) and (max-width: 1199px)");
	width1150.addListener(WidthChange16);
	WidthChange16(width1150);
}
if (matchMedia) {
	var width1200 = window.matchMedia("(min-width: 1200px) and (max-width: 1249px)");
	width1200.addListener(WidthChange17);
	WidthChange17(width1200);
}
if (matchMedia) {
	var width1250 = window.matchMedia("(min-width: 1250px) and (max-width: 1299px)");
	width1250.addListener(WidthChange18);
	WidthChange18(width1250);
}
if (matchMedia) {
	var width1300 = window.matchMedia("(min-width: 1300px) and (max-width: 1349px)");
	width1300.addListener(WidthChange19);
	WidthChange19(width1300);
}
if (matchMedia) {
	var width1350 = window.matchMedia("(min-width: 1350px) and (max-width: 1399px)");
	width1350.addListener(WidthChange20);
	WidthChange20(width1350);
}
if (matchMedia) {
	var width1400 = window.matchMedia("(min-width: 1400px) and (max-width: 1439px)");
	width1400.addListener(WidthChange21);
	WidthChange21(width1400);
}
if (matchMedia) {
	var width1440 = window.matchMedia("(width: 100%)");
	width1440.addListener(WidthChange22);
	WidthChange22(width1440);
}


if (matchMedia) {
	var height175 = window.matchMedia("(min-height: 175px) and (max-height: 224px)");
	height175.addListener(HeightChange1);
	HeightChange1(height175);
}
if (matchMedia) {
	var height225 = window.matchMedia("(min-height: 225px) and (max-height: 274px)");
	height225.addListener(HeightChange2);
	HeightChange2(height225);
}
if (matchMedia) {
	var height275 = window.matchMedia("(min-height: 275px) and (max-height: 324px)");
	height275.addListener(HeightChange1);
	HeightChange3(height275);
}
if (matchMedia) {
	var height325 = window.matchMedia("(min-height: 325px) and (max-height: 374px)");
	height325.addListener(HeightChange2);
	HeightChange4(height325);
}
if (matchMedia) {
	var height375 = window.matchMedia("(min-height: 375px) and (max-height: 424px)");
	height375.addListener(HeightChange1);
	HeightChange5(height375);
}
if (matchMedia) {
	var height425 = window.matchMedia("(min-height: 425px) and (max-height: 474px)");
	height425.addListener(HeightChange2);
	HeightChange6(height425);
}
if (matchMedia) {
	var height475 = window.matchMedia("(min-height: 475px) and (max-height: 524px)");
	height475.addListener(HeightChange1);
	HeightChange7(height475);
}
if (matchMedia) {
	var height525 = window.matchMedia("(min-height: 525px) and (max-height: 574px)");
	height525.addListener(HeightChange2);
	HeightChange8(height525);
}
if (matchMedia) {
	var height575 = window.matchMedia("(min-height: 575px) and (max-height: 624px)");
	height575.addListener(HeightChange1);
	HeightChange9(height575);
}
if (matchMedia) {
	var height625 = window.matchMedia("(min-height: 625px) and (max-height: 674px)");
	height625.addListener(HeightChange2);
	HeightChange10(height625);
}
if (matchMedia) {
	var height675 = window.matchMedia("(min-height: 675px) and (max-height: 724px)");
	height675.addListener(HeightChange1);
	HeightChange11(height675);
}
if (matchMedia) {
	var height725 = window.matchMedia("(min-height: 725px) and (max-height: 774px)");
	height725.addListener(HeightChange2);
	HeightChange12(height725);
}


// media query change
function WidthChange1(width400) {
	if (width400.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link1.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function WidthChange2(width450) {
	if (width450.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link2.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function WidthChange3(width500) {
	if (width500.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link3.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
   }
}

function WidthChange4(width550) {
	if (width550.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link4.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function WidthChange5(width600) {
	if (width600.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link5.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange6(width650) {
	if (width650.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link6.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange7(width700) {
	if (width700.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link7.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange8(width750) {
	if (width750.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link8.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange9(width800) {
	if (width800.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link9.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange10(width850) {
	if (width850.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link10.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange11(width900) {
	if (width900.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link11.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange12(width950) {
	if (width950.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link12.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange13(width1000) {
	if (width1000.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link13.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange14(width1050) {
	if (width1050.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link14.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange15(width1100) {
	if (width1100.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link15.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange16(width1150) {
	if (width1150.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link16.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange17(width1200) {
	if (width1200.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link17.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange18(width1250) {
	if (width1250.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link18.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange19(width1300) {
	if (width1300.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link19.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange20(width1350) {
	if (width1350.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link20.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange21(width1400) {
	if (width1400.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link21.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}

function WidthChange22(width1440) {
	if (width1440.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
  		window.open("link22.html",'_blank', "resizable=yes,width=300,height=200,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
  	} 
}







function HeightChange1(height175) {
	if (height175.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link23.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange2(height225) {
	if (height225.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link24.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function HeightChange3(height275) {
	if (height275.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link25.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange4(height325) {
	if (height325.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link26.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function HeightChange5(height375) {
	if (height375.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link27.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange6(height425) {
	if (height425.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link28.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function HeightChange7(height475) {
	if (height475.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link29.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange8(height525) {
	if (height525.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link30.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function HeightChange9(height575) {
	if (height575.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link31.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange10(height625) {
	if (height625.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link32.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

function HeightChange11(height675) {
	if (height675.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link33.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    }
}

function HeightChange12(height725) {
	if (height725.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	window.open("link34.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	window.focus();
    } 
}

});

