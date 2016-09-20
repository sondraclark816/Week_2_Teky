// Sondra Clark, Izaak, 9/17/16

//PROBLEM 1
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var i = numArray.indexOf (27, 0);

console.log(i);


//PROBLEM 2
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var total = 0;

for(index in numArray) {
    total += numArray[index];
}

console.log(total);


//PROBLEM 3
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArray.pop();

console.log(newArray);


//PROBLEM 4
function lessThan(num1, num2) {
    if(num1 + num2 <= 25) {
        return "true";
    } else{
        return "false";
    }
}

var i = lessThan(14, 10);
console.log(i);


//PROBLEM 5
var string1 = ("I'm catching on ");
var string2 = ("I think");
var sum = string1.length + string2.length;

function combine(string1, string2) {
    if( sum > 12) {
        return "Error, string too long";
    } else {
        return sum;
    }
}
var ie = combine(" ");
console.log(ie);


//PROBLEM 6 **Seems like I did more code than it should've took, will you let me know if there is a better way?**'
var num = 0 
do{
    num++
    console.log("Very Low Number")
} while( num <= 5);

var num1 = 6
do{
    num1++
    console.log("Low Number")
} while( num1 <= 10);

var num2 = 11
do{
    num2++
    console.log("High Number")
} while(num2 <= 15);

var num3 = 16
do { 
    num3++
    console.log("Very High Number")
} while(num3 <= 20);

