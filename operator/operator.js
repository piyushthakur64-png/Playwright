//Arithmatic operator

//It will perform the arithmatic operation on the given numbers and return the result

let a = 8;
let b = 2;

let c = a + b;
console.log(c);

let d = a-b;
console.log(d);

let e = a*b;
console.log(e);

let f = a/b; 
console.log(f);

let g = a%b;
console.log(g);

//Assignment Operator
//Used to assign value to variable

let X= 6;
console.log(X);
X+=5; //also can be written as X= X+5
console.log(X);

X-=6;
console.log(X);

X=X*5;
console.log(X);

X=X/5;
console.log(X);

//Comparision Operator
//Used to compare two values and return true or false

console.log("Comparison Operator");

let p=5;
let q='5';
let r = p==q;
console.log(r);

let s = p===q;
console.log(s);

let t = p>q;
console.log(t);

let u = p<q;
console.log(u);

let v = 20;
let w = 5;

let j = v>=w;
console.log(j);

let k = v<=w;
console.log(k);

//logical operator
//Returns true or false based on the condition

//&& - AND Operator
//|| - OR Operator
//! - NOT Operator

//&& Operator

//F*F = F
//F*T = F
//T*F = F
//T*T = T

//|| Operator
//F+F = F
//F+T = T
//T+F = T
//T+T = T

console.log("Logical Operator");

a = 20;
b = 20;


let andOperator = (a==b) && (a>=b);
console.log(andOperator);

let orOperator = (a==b) || (a>=b);
console.log(orOperator);

let notOperator = !(a==b);
console.log(notOperator);

let andOperator2 = (a==b) && (a<b);
console.log(andOperator2);

let orOperator2 = (a==b) || (a<b);
console.log(orOperator2);

//String OPerator
//Used to perform operation on string

console.log("String Oprator");

let Str1 = "Hello";
let Str2 = "World";

let result = Str1+Str2;
console.log(result);

let result2 = Str1+ ' ' + Str2;
console.log(result2);

let FirstName = "John";
let LastName = "Doe";

let FullName = FirstName + ' ' + LastName;
console.log(FullName);

let factorial =1;
for (let i=1; i<=5; i++){

    factorial = factorial * i;
}

console.log('factorial of 5 is: ' + factorial);

