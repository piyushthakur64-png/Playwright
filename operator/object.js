//object
//object is collecction of properties
//properties are contain with key and vaue pair
//object contain multiple data with diffrent data types

//how to decalre object

let student = {

    name : 'Ramesh',
    studentid : "104",
    lastname : 'Pande',
    Grade : 'A',

}

//how to access properties in object
//1. way to access by object.property name

console.log(student.name);

//2. way to access by array

console.log(student['Grade']);

// 3) if we have any form on UI and we have to fill value from object then

//await page.locator('#userName').fill(student.name);


// 4) How to update the value in object

student.name = 'Suresh';

console.log(student);

// 5) How to check any property is present in object

console.log('name' in student);

console.log('Suresh' in student); // this value in object and this method will check only property in object

// How to iterate the properties in object

for (let X in student)

    {
        console.log(student[X]);


    }



//Assignment

let employee = {

    name : 'Shubham',
    id : '105',
    department : 'IT',
    salary : '70000'
}

//Print employee name using . notation

console.log(employee.name);

//Print employee department using bracket notation

console.log(employee['department']);

//update the id of employee

employee.id = '205';
console.log(employee);


//Print salary using . notation and bracket notation

console.log(employee.salary);

console.log(employee['salary']);

//Iterate the propeeties in object

for (let e in employee)
{
    console.log(employee[e]);
}






