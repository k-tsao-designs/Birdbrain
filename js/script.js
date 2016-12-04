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

	var height575 = window.matchMedia("(min-height: 575px)");
	var height625 = window.matchMedia("(min-height: 625px)");
	var height675 = window.matchMedia("(min-height: 675px)");
	var height725 = window.matchMedia("(min-height: 723px)"); /*defunct in this screen*/



// media query event handler
if (matchMedia) {
	var height575 = window.matchMedia("(min-height: 575px) and (max-height: 576px)");
	height575.addListener(HeightChange9);
	HeightChange9(height575);
}
if (matchMedia) {
	var height625 = window.matchMedia("(min-height: 625px) and (max-height: 626px)");
	height625.addListener(HeightChange10);
	HeightChange10(height625);
}
if (matchMedia) {
	var height675 = window.matchMedia("(min-height: 675px) and (max-height: 676px)");
	height675.addListener(HeightChange11);
	HeightChange11(height675);
}
if (matchMedia) {
	var height725 = window.matchMedia("(min-height: 723px) and (max-height: 724px)");
	height725.addListener(HeightChange12);
	HeightChange12(height725);
}


var winH575;
var winH625;
var winH675;
var winH725;

var names = ["Jonathan", "Luke", "Kelly", "Noah", "Bohao", "Tyler", "Emma", "Sophia", "Jackson", "Aiden", "Olivia", "Lucas", "Ava", "Liam", "Mia", "Isabella", "Ethan", "Riley", "Mason", "Aria", "Caden", "Zoe", "Oliver", "Charlotte", "Elijah", "Lily", "Grayson", "Leila", "Jacob", "Amelia", "Michael", "Emily", "Benjamin", "Madelyn", "Carter", "Aubrey", "James", "Madison", "Logan", "Chloe", "Alexander", "Harper", "Caleb", "Winston", "Daniel", "Addison", "Nostradamus", "Ebenezer", "Mildred", "Melrose", "Pinky", "Marlon Brando", "Fritz", "Lysander", "Hestia", "Raj", "Stumpy", "Oops", "The Dude", "Marvel", "Ramses", "Cleopatra", "Averil", "Durand", "Eluned", "Iolo", "Yevan", "Meliora", "Oriel", "Christopher", "Ella", "Eve", "Adam", "Trevor", "William", "Anna", "Jessica", "Rachel", "Christina", "Zachary", "Margaret", "Kelsey", "Elizabeth", "Bridget", "Renee", "Maria", "Isaac", "Cheryl", "Walter", "Beatrice", "Adeline"];
var countNames = names.length;
var r = Math.floor((Math.random() * countNames) + 0);;
var randomName = names[r];

// media query change

function HeightChange9(height575) {
	r = Math.floor((Math.random() * countNames) + 0);
	if (height575.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	winH575=window.open("link31.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	winH575.document.title=names[r];
    	winH575.focus();
    	setTimeout(function(){ winH575.close() }, 4000);
    }
}

function HeightChange10(height625) {
	r = Math.floor((Math.random() * countNames) + 0);
	if (height625.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	winH625=window.open("link32.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	winH625.focus();
    	winH625.document.title=names[r];
    	setTimeout(function(){ winH625.close() }, 3000);
    } 
}

function HeightChange11(height675) {
	r = Math.floor((Math.random() * countNames) + 0);
	if (height675.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	winH675 = window.open("link33.html",'_blank', "resizable=yes,width=150,height=100,top=" + randomTop +",left=" + randomLeft +"");
    	winH675.focus();
    	winH675.document.title=names[r];
    	setTimeout(function(){ winH675.close() }, 6000);
    }
}

function HeightChange12(height725) {
	r = Math.floor((Math.random() * countNames) + 0);
	if (height725.matches) {
    	var randomTop = Math.floor((Math.random() * 675) + 0);
    	var randomLeft = Math.floor((Math.random() * 1340) + 0);
    	winH725 = window.open("link34.html",'_blank', "resizable=yes,width=150,height=125,top=" + randomTop +",left=" + randomLeft +"");
    	winH725.focus();
    	winH725.document.title=names[r];
    	setTimeout(function(){ winH725.close() }, 5000);
    } 
}




// $(window).on("orientationchange",function(){
// set array of all images
// append image to body with tiny width, auto height, and random position
// });

});

