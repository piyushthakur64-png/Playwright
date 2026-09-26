//Function
//Function is block of code that can be executed together by wrapping up in the module
//Function is idependent that can perform any task
//Function does not belong to any obect

//How to decalre funtion

function add (){

    return (20+20)
}


console.log(add());

//To make it dynamic we use paramaterized function

function addparam(a,b){

    return a+b
}

console.log(addparam(20,20)); //output = 40
console.log(addparam()); // output = NaN (Not a Number)

//How to use anonymous function
//The function which dont have any name is called as anonymous function

let func = function (c,d){ // to call thsi function we need to store this in to variable

    return c*d

}

console.log(func(20,20));


//another way to declare anonymous function

let anony = (a,b) =>
{
    return a*b;
}
console.log(anony(500,700));


//Method
//Method is simply function that is stored as property of an object
//Method is a function that belongs to class or object

//How to declare method

class Login {

    validlogin(a,b)
    {
        return a+b;
    }
}

//how to call method
//first we have to create object of class


let login = new Login();

console.log(login.validlogin(50,70));
