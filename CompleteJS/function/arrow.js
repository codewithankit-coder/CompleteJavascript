console.log("This is arrow functions");
//This current contest ko referr karta hai
const user={
    username:"Ankit",
    price:99,
    websiteMessage:function(){
        console.log(`${this.username},welcome to website`)//for acessing the username
        console.log(this);//ye print ho jayega
    }
}
user.websiteMessage();
user.username="Ankush";
user.websiteMessage();
//bahar me contest
console.log(this);//ye empty print hoga{}like object
//jab ham node environment me hai
//browser me window show karega //browser ke andar window global object hota hai
// ==========================================

function fun(){
    console.log(this);
}
fun()
// ========================================
function funny(){
    let fun ="Ankit";
    console.log(this.fun);//we can't use it gives undefined
}
funny();
// ========================================================
// ARRAY FUNCTIONS

const chai=()=>{
    let username="Ankit";
    console.log(this.username);
}
chai();
// =================DIFFRENCE BETWEEN FUNCTIONS AND ARROW Function
//please do it your self


const userName=(num1,num2)=>{
    return num1+num2;
    console.log("This is arrow function")
}
console.log(userName(4,5));
//Implecent return

const userNaming=(num1,num2)=> num1+num2;
    console.log("This is arrow function")
    // const userNaming=(num1,num2)=>( num1+num2;)//we can write this type also
//REACT JS ME JAYADA USE HOTA HAI


console.log(userNaming(4,6));

//FOR RETURNING OBJECTS
const onjedc=(num3,num4)=>({username:"Ankit",price:999,school:"Govt..."});
console.log(onjedc(3,4))

//example
const myArray =[4,4,5,6,7,5,5,5,5,5,5,];
myArray.forEach(()=>{
    console.log("This is execute")
})

