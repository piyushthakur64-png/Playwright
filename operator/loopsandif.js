//if
//else
//else if
//else

/* we will use this when we wnat to check the condition one time and 
if the condition is true then we will execute the code block inside the
if statement otherwise we will check the next condition in the else if statement 
and if that condition is true then we will execute the code block inside the else if statement 
otherwise we will execute the code block inside the else statement. */

let age = 18;

if (age>=18) {

    console.log("You are eligible to vote");
}
else{

    console.log("You are not eligible to vote");
}

let x;
let y = 5;

if (x>y) {
    console.log("x is greater than y");
}   
else if (x<y) {
    console.log("x is less than y");
}       
else if (x==y) {
    console.log("x is equal to y");
}
else{
    console.log("x is not defined");
}

//while loop
/* When the condition is true then the block of code will be execute
when the condition is false then the block of code will not be execute
we use while loop when we dont know the  number how many times loop will run */

let fuel = 5;
while (fuel>0)
{
    console.log("Car is running");
    fuel--;
}

//do while loop
/* When the condition is true then the block of code will be execute
when the condition is false then the block of code will not be execute
we use do while loop when we dont know the  number how many times loop will run */

//fuel = 5;

console.log("Do While Loop");
do{
    console.log("Car is running");
    fuel--;
}
while (fuel>0);

//for loop

/* When the condition is true then the block of code will be execute
when the condition is false then the block of code will not be execute
we use for loop when we know the  number how many times loop will run */

let factorial = 1;
for(let i=1; i<=5; i++)
{
   factorial = factorial*i; 
}

console.log("Factorial of 5 is " + factorial);

for(let i=1; i<=50; i++)
{
    console.log(i);
}

console.log('divisible by 2 and 4');
for(let d=1; d<=20; d++)
{
    if(d%2==0 && d%4==0)
    {
        console.log(d);
    }
    
}
