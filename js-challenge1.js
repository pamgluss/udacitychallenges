// Challenge 1
// resetForm
function resetForm(){
	document.getElementById("form-input1").reset();
}

// HTML version
var x, y, answer1;
function getRelationship(x, y){
	x = $("#challenge1x").val();
	y = $("#challenge1y").val();
	
	var xInt = parseInt(x);
	var yInt = parseInt(y);
	answer1 = $("#answer1");
	
	if(isNaN(xInt) && isNaN(yInt)){
		answer1.text("Neither " + x + " nor " + y + " are numbers. Please try again.");
		console.log("X Value is " + x + " Y Value is " + y);
			
	} else if(isNaN(xInt)){
		answer1.text(x + " is not a number. Try again.");
		console.log("X Value is " + x + " Y Value is " + y);
			
	} else if(isNaN(yInt)){
		answer1.text(y + " is not a number. Try again.");
		console.log("X Value is " + x + " Y Value is " + y);
			
	} else {
		if(xInt > yInt){
		answer1.text(x + " is greater than " + y + ".");
		console.log("X Value is " + x + " Y Value is " + y);
		} else if (xInt < yInt){
		answer1.text(x + " is less than " + y + ".");
		console.log("X Value is " + x + " Y Value is " + y);
		} else {
		answer1.text(x + " is equal to " + y + ".");
		console.log("X Value is " + x + " Y Value is " + y);
		}
	}
	
	
}


// Console Version

//function getRelationship(x, y){
//	if(x.type === 'number' && y.type === 'number'){
//		if(x > y){
//			return(x + "is greater than" + y + ".");
//		
//		} else if (x < y){
//			return(x + "is less than" + y + ".");
//
//		} else {
//			return(x + "is equal to" + y + ".");
//
//		}
//	} else {
//		if(isNaN(x) && isNaN(y)){
//			return("Neither " + x + " nor " + y + " are numbers. Please try again.");
//		}
//		else if(typeof x !== 'number' && typeof y !== 'number'){
//			return("Neither " + x + " nor " + y + " are numbers. Please try again.");
//
//		} else if(typeof x !== 'number' || x === "NaN"){
//			return(x + " is not a number. Try again.");
//		
//		} else if(typeof y !== 'number' || isNaN(y)){
//			return(y + " is not a number. Try again.");
//			
//		} else {
//		    return("Not sure what happened, but there's been an error");
//		}
//	}
//}

// Challenge 2

// HTML Version

function nameAlphabetizer(_names){
var listItems = document.getElementsByTagName("li");
var listItemsArr = [];
var listItemsArr2 = jQuery.makeArray(listItems);
var namesAlpha = [];

// Push text from HTML <li> to js array
for(var i = 0; i < listItems.length; i++){
	listItemsArr.push(listItems[i].innerHTML);
}

// Alphabetize!!
var firstName;
var lastName;
    
	for(var i = 0; i < listItemsArr.length; i++){
		var nameSplit = listItemsArr[i].split(" ");
		if(nameSplit.length === 2){
		    firstName = nameSplit[0];
			lastName = nameSplit[1];
		} else if(nameSplit.length === 3) {
			firstName = nameSplit[0] + " " + nameSplit[1];
			lastName = nameSplit[2];
		} else {
			firstName = nameSplit[0];
			lastName = nameSplit[nameSplit.length - 1];
		}
		
	var newName = lastName + ", " + firstName;
	namesAlpha.push(newName);
	}

namesAlpha.sort();

for(var i = 0; i < namesAlpha.length; i++){
	$('<li>').text(namesAlpha[i]).appendTo("#challenge2-results");
}	

}

// Add a New Name to the List

function insertName(name){
	var userInputName = $("#insertName").val();
	if(userInputName){
		$('<li>').text(userInputName).appendTo("#astronaut-list");
	} else {
		console.log("User input not valid");
	}

}
// Console Version

//var moonWalkers = [
//  "Neil Armstrong",
//  "Buzz Aldrin",
//  "Pete Conrad",
//  "Alan Bean",
//  "Alan Shepard",
//  "Edgar Mitchell",
//  "David Scott",
//  "James Irwin",
//  "John Young",
//  "Charles Duke",
//  "Eugene Cernan",
//  "Harrison Schmitt"
//];
//var namesAlpha = [];
//function alphabetizer(names) {
//    var firstName;
//    var lastName;
//    
//	for(var i = 0; i < names.length; i++){
//		var nameSplit = names[i].split(" ");
//		if(nameSplit.length === 2){
//		    firstName = nameSplit[0];
//			lastName = nameSplit[1];
//		} else if(nameSplit.length === 3) {
//			firstName = nameSplit[0] + nameSplit[1];
//			lastName = nameSplit[2];
//		}
//		
//	var newName = lastName + ", " + firstName;
//	namesAlpha.push(newName);
//	}
	
//	namesAlpha.sort();
//	moonWalkers = namesAlpha;
//	return moonWalkers;
//}

// Try logging your results to test your code!
//console.log(alphabetizer(moonWalkers));

