////////////////////////REDUCE PROBLEM /////////////////////////////////
// reduce
// Use the reduce function to iterate through an array of words and construct a decoded sentence (string) based on the following criteria:
// If the array element is exactly three characters in length, add a space character to your accumulator
// Otherwise, capitalize the LAST character of the array element and add it to your accumulator
// Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
// You will need to convert the input to an array before using .reduce()
// HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string so that future iterations can concatenate more string characters

function processSentence(sentence) {
let splittedArray = sentence.split(' ');
return splittedArray.reduce(function(accumulator, currentValue){
	if(currentValue.length === 3) {
		return accumulator + ' ';
	}
	else {
		return accumulator + currentValue.charAt(currentValue.length-1).toUpperCase();
	}
	}, '');
};



let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(processSentence(input));