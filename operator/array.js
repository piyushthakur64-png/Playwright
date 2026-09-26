// Array

/*
Array is collection of multiple element stored in single variable
Array contain multiple element of same data type
We can access array element by index value
*/

var marks = [20,30,40,50,60];

//console.log(marks);

var marks = [20,30,40,50,60,70,80,90];

console.log(marks);

//here it will print latest array because w use var keywrod and var keyword can redeclare

//how to update the array

marks[0] = 600; // this will update the value of index 0

console.log(marks);

//how to check lenght of array

console.log(marks.length);

//how to get the index from value

console.log(marks.indexOf(60));

//want the first 4 element and add din the sub array

pcm = marks.slice(0,5);

console.log(pcm);

//to get values form differnet index

var maths = [marks[0],marks[4]];

console.log(maths);

//how to add element in same array

marks.push(45); //this will add element at the end of array

console.log(marks);

//how to add element in the array

marks.unshift(31); //this will add element at the start of array

console.log(marks);

//how to remoeve element from the last index

marks.pop(); //this will remove the element form last index

console.log(marks);

//how to remove element from first index

marks.shift(); //this will remove element from first index


console.log(marks);

//Java scripts array is always dynamic in nature even of we mention sixe of array still we can add more values in that array

let dynamic = new Array(5);

console.log(dynamic); // this will print empty array with 5 slots

/*dynamic[0] = 15;
dynamic[1] = 20;
dynamic[2] = 25;
dynamic[3] = 20;
dynamic[4] = 20;
dynamic[5] = 30;*/

//console.log(dynamic);

dynamic[0] = 15;
dynamic[1] = 20;
dynamic[2] = 25;
dynamic[4] = 20;

console.log(dynamic);

//Method to handle array

//1. Reduce method
//2. Filter methof
//3. Map method

//1. Reduce method -- it is used to reduce the array in single value

var marks = [90,80,70,55,57,40]

var total = marks.reduce((Sum,mark) => Sum + mark, 0);

// here the sum will store initially 0 Value which is mentioned at last and mark will store index value of array
//and after function sum + mark will get add and new value will store in sum and mark will update wit next index value

console.log(total);

//2, Filter method -- it is used to filter the element form array depending on our condition

var marks = [90,80,70,55,57,40]

var evenElement = marks.filter ((mark) => mark %2 ==0);
// here mark will store the index value of array and in condition it will check if that elemnt is divisible by 2
// means it is even number then it will store in evenElement array
console.log("Prnt Even element from array");
console.log(evenElement);

//3. Map method -- it is used to update the value of exisitng array with new value

var marks = [90,80,70,55,57,40]

var newMarks = marks.map((mark) => mark * 1.18);
//here mark will store value of index and then in function it will perform action
//and it will save new value in newMarks

console.log("Print New Array create by Map method");
console.log(newMarks);