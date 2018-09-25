// Functions as arguments (1)
// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)

function repeat(fn, n) {
for(let i=0; i<n; i++) {
	fn();
}

}

function hello() {
	console.log('Hello world');
}

function goodbye() {
	console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
	// TASK: Define your function here
	let newArr = [];
	for(let i =0; i < arr.length; i++){
		if(fn(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;

}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});
console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(myNames);


////////////////////////////////////////////////////////////
function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter++;
		console.log(`DANGER!  There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
	}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodsWarning = hazardWarningCreator('Floods on the Road');
const volcanoWarning = hazardWarningCreator('Volcano on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and South Ave');
rocksWarning('Main St and Central Ave');




function turtleFilter(movements){
	return movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);
}

function turtleFilterFun(movements){
	return movements.filter(function (movement){
		return (movement[0] >= 0 && movement[1] >= 0);
	});

}

function turtleMap(movements){
	let newArray = movements.map(function(elem) {
		return Math.abs(elem[0]) + Math.abs(elem[1]);
	});
	return newArray;
}

function turtleEach(movements){
	let newArr = [];
	 movements.forEach(function(elem) {
		 newArr.push(Math.abs(elem[0] + Math.abs(elem[1])));
	});
	return newArr;

}

//movement = function(movement)

let turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let turtleMove2 = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleFilter(turtleMove));
console.log(turtleFilterFun(turtleMove));
console.log(turtleMap(turtleMove));
console.log(turtleEach(turtleMove2));

//////////////////////////REDUCE PROBLEM /////////////////////////////////
// reduce
// Use the reduce function to iterate through an array of words and construct a decoded sentence (string) based on the following criteria:
// If the array element is exactly three characters in length, add a space character to your accumulator
// Otherwise, capitalize the LAST character of the array element and add it to your accumulator
// Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
// You will need to convert the input to an array before using .reduce()
// HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string so that future iterations can concatenate more string characters

function reducer(sentence) {
let splittedArray = sentence.split(' ');
let newWord = splittedArray.reduce(function(initialValue, currentValue){
	if(splittedArray(currentValue).length === 3) {
		initialValue += ' ';
		return initialValue;
	}
	else {
		initialValue += splittedArray(currentValue).charAt(currentValue.length-1).toUpperCase();
		return initialValue;
	}
	}, '');
return newWord;
};



let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(reducer(input));










