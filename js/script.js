$(document).ready(function() {


	var height575 = window.matchMedia("(min-height: 575px)");




// media query event handler
if (matchMedia) {
	var height575 = window.matchMedia("(min-height: 575px) and (max-height: 576px)");
	height575.addListener(HeightChange9);
	HeightChange9(height575);
}


var winH575;

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
    	document.title=names[r];
    	winH575.focus();
    	setTimeout(function(){ winH575.close() }, 4000);
    }
}


});

