//String


//It is premitive data type and represent in (' ') or (" ");

let str = 'tuesday'
console.log(str);

//convert to upper case

let upper = str.toUpperCase();
console.log(upper);

//convert to lower case

let lower = upper.toLowerCase();
console.log(lower);

//sting lenght

console.log(lower.length);

//slice the string value

let slce = str.slice(0,5);

console.log(slce);

//split method
//this will print the output in array

let splt = str.split('s')

console.log(splt);

//how to trim the spaces

let spce = "    firstname"

spce.trim(); //it will trim space form first and end

console.log(spce.trim());

let firstspce = "    first"



console.log(firstspce.trimStart());

let endspce = "end    "
console.log(endspce);

//how to convert number in to string

let digit = 5;

console.log(typeof (digit));

let newstring = digit.toString();

console.log(typeof (newstring));

//how to convert string to number

let newstr = '5';

console.log(typeof (newstr));

let newnumber = parseInt(newstr);

console.log(typeof (newnumber));

//how to count each charater from string array

let arraystring = ['apple','mango','bnanana','guava']

console.log(arraystring.length); // it will print the number of element of array

//how to get count of each character in string array

let arraystr = ['apple','mango','banana','guava']

let strcount = arraystr.join(); // it will remove element from array

console.log(strcount);

console.log(strcount.length);


