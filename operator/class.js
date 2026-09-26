//Classes and its properties
//constructor

export class Person{

constructor(firstName, lastName, age){

this.firstName= firstName
this.lastName = lastName
this.age = age

}

fullname(){

return this.firstName+ ' '+this.lastName

}

personage(){
    return this.age
}

getLocation(){

return "pune"

}


}


// let person = new Person('Shivaji', 'Pande', 35);

// console.log(person.fullname());
// console.log(person.getLocation());
// console.log(person.lastName)

// let person1 = new Person('Ramesh', 'Jha', 40);
// console.log(person1.fullname());
//console.log(person1.personage());