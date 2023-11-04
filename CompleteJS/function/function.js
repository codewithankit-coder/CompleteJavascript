//function and parameters
// console.log("function with parameters");
// console.log("This is ankit kumar is here all of this "); 
//fucntion jaise koi kaam bahut baar karwan hai to use karo functions


//syntax of functions

// function sayName(){}
function myName(){
console.log("A");
console.log("n");
console.log("k");
console.log("i");
console.log("t");
}
myName();//its execution

//if we write simple myName;
//Then it not give you error  myName hame bata rahe hai ki ye iska refrence hai aur o waha rahata hai
//myName

// function addNumber(num1,num2){//This is parameters
// console.log(num1+num2)
// }
// addNumber(4,5);//this is argument
// addNumber(1,a);
// addNumber(1,null);


function NAme(num1,num2){
    let MynaMe=num1+num2;
    console.log("Ankit");
    return MynaMe;
    //another way to write this code
    // 𝕣𝕖𝕥𝕦𝕣𝕟 𝕟𝕦𝕞𝟙+𝕟𝕦𝕞𝟚; // 𝕥𝕙𝕚𝕤 𝕚𝕤 𝕘𝕠𝕠𝕕 𝕨𝕒𝕪 𝕥𝕠  𝕨𝕣𝕚𝕥𝕖 𝕥𝕙𝕖 𝕔𝕠𝕕𝕖𝕤
    console.log("kumar");// return ke baad wala kabhi bhi print nahi hoga 
}


const Myname=NAme(5,5);
console.log(Myname);

function loginUserMessage(username="Raju  "){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    // return don't use here
    return `${username}just logged in`
}
// console.log(loginUserMessage("Ankit"));
// console.log(loginUserMessage(''));
console.log(loginUserMessage());//it show you undefined



//advanced like professional
function loginUser(user="Ankit "){//for taking a default values write here (username="Ankit");for default
    if(!user){
        console.log("Please enter your username")
        // return
    }
    return `${user}Just logged in`
}
console.log(loginUser());