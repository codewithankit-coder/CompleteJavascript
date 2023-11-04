 //singleton
//simple meaning jab ham constructor se banate hai to singleton ek object banta hai yaniki ye apane tarah ka ek hi object hai


//literal
//tosare tarike se banane pe bahut sare instance ban jate hai

//jab ham literal ki tarah declear karate hai to singleton nahi banata hai
//AUR CONSTRUCTOR SE HAMESHA SINGLE TON HI BANEGA

// +++++++++++++++OBJECTS_LITERALS++++++++++++++

//HOW TO CREATE OBJECT
//Object.create  //this is constructor it present singleton

//object literals

//declaration of Symbol
const mySync=Symbol("key1")
const jsObject={
    //in object have keys:values
    name:"Ankit",
    age:10,
    rollno:"09",
    subject:"Math",
    [mySync]:"key1",
    optional:"Computer",// this is one of the best
    email:"alex@gmail.com",
    lastLoginDays:['sunday','monday']
    ,'lastname':"lastname"}
// for executing the values
jsObject.email;
console.log(jsObject.email);// not a good way
console.log(jsObject.mySync);
console.log(typeof jsObject.mySync)

console.log(jsObject[mySync])
//Another way to write
console.log(jsObject['age']);


// myArray=["ANkit",'kumar'];
// myArray[0];
// square 
console.log(jsObject['lastname']);
// how to declare Symbol
const sync=Symbol('keyframe');

//how to add in object
const collect={
    name:"Ankit",
    class:"12th",
    age:17,
    [sync]:'keyframer',//not a good way
    email:"alex@gmail.com"

}
console.log( collect['sync']);
//events and Objects are most important 

//how to change values in array
//for changing the values
collect.email='ankit123@gmail.com';
//if we want do body change it
console.log(collect["email"])
// Object.freeze(collect);//it not also to change any values

console.log(collect);

//we also add function in object
collect.greeting=function(){
    console.log("Hii js collect");
}
console.log(collect.greeting);//only it gives you function refrence

console.log(collect.greeting());// it gives you true

//let's make another function

collect.greetingTwo=function(){
    //string interpulation jab same object ko refrence karna ho to we can use this

    console.log(`This is jsCollection ${this.name}`);
}
console.log(collect.greeting());
console.log(collect.greetingTwo());

