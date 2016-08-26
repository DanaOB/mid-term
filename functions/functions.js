// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(num1,num2){
	return num1 + num2;
}

var multiplyTest = multiply(2,3)
console.log(multiplyTest)

// whatForLunch
//NO WORKY YET
var whatForLunch = function(name,food){
	var sentance = new String(name.toString() + " had " + food.toString() " for lunch today");
	return sentance;
}
var whatForLunchTest = whatForLunch(Dana, pasta);
console.log(whatForLunchTest);

// isLargerThan100
//Takes in a number and returns whether that number is larger than 100 or not.

var isLargerThan100 = function(number){
	if (number > 100){
		return "number is larger than 100";
	}else{
		return "number is NOT larger than 100";
	}
}
var isLargerThan100Test1 = isLargerThan100(40);
var isLargerThan100Test2 = isLargerThan100(140);

console.log(isLargerThan100Test1);
console.log(isLargerThan100Test2);

// anyEvens
//Takes in an array of numbers, and checks to see whether ANY of the items are 
//even. If any are it should return true, otherwise it should return false.
var anyEvens = function(numbers){
	for (var i = 0; i < numbers.length; i++){
    	isThereAnEven = false;
    	if(numbers[i]%2 === 0){
    		isThereAnEven = true;
    	}else{
    		isThereAnEven = false;
    	}
    }
    return isThereAnEven;
}
var nums = [1, 21, 471, 470, 39, 10, 92];
var anyEvensTest = anyEvens(nums);
console.log(anyEvensTest);

// printDataType
//Create a function named `printDataType` that takes one parameter, `collection`
//and logs to the console the values in the collection.
var printDataType = function(collection){
	console.log(collection.toString());
}

var numberData = 3;
var stringData = "stringy"
printDataType(numberData);
printDataType(stringData);

// isDivisibleBy
//Create a function that takes in two numbers, and returns whether the first 
//number is evenly divisible by the second number. If it is return true, if not 
//return false.
var isDivisibleBy = function(num1,num2){
	if (num1%num2 === 0){
		return true;
	}else{
		return false;
	}
}

var isDivisibleByTest1 = isDivisibleBy(4,2);
var isDivisibleByTest2 = isDivisibleBy(4,3);
console.log(isDivisibleByTest1);
console.log(isDivisibleByTest2);


// fizzBuzz
//Takes in an array of numbers and for each number prints to the console:
//-'Fizz' if it can be divided evenly by 3 (but not 5)
//-'Buzz' if it can be divided evenly by 5 (but not 3)
//-'FizzBuzz' if it can be divided evenly by 5 and 3
//-Just the number itself if it can't be divided by either 3 or 5 evenly
var fizBuzz = function(numbers){
	for (var i = 0; i < numbers.length; i++){
		if (isDivisibleBy(numbers[i],3) === true && isDivisibleBy(numbers[i],5) === false){
			console.log("Fizz");
		}
		if (isDivisibleBy(numbers[i],3) === false && isDivisibleBy(numbers[i],5) === true){
			console.log("Buzz");
		}
		if (isDivisibleBy(numbers[i],3) === true && isDivisibleBy(numbers[i],5) === true){
			console.log("FizzBuzz");
		}
		if (isDivisibleBy(numbers[i],3) === false && isDivisibleBy(numbers[i],5) === false){
			console.log(numbers[i]);
		}
	}
}
var numsFizzBuzz = [3, 5, 15, 1];
var fizzBuzzTest = fizBuzz(numsFizzBuzz);
console.log(fizzBuzzTest);
