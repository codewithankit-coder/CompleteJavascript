//OBJECTS SINGLETON MEANS USING  WITH CONSTRUCTOR
//like making tinderApp
const  users= new Object();// Tℍ𝕀𝕊 𝕀𝕊 𝕊𝕀ℕ𝔾𝕃𝔼𝕋𝕆ℕ 𝕆𝔹𝕁𝔼ℂ𝕋//This is object
console.log(users);
//another 
const users2={};//𝕋ℍ𝕀𝕊 𝕀𝕊 ℕ𝕆𝕋 𝔸 𝕊𝕀ℕ𝔾𝕃𝔼𝕋𝕆ℕ 𝕆𝔹𝕁𝔼ℂ𝕋//this is also objects

console.log(users2);//

const unique={};
//for adding values in objects
unique.id="alex@";//this id is for uniqueness
unique.name="Ankit";
unique.isLogin=false;
console.log(unique);//it will gives you output
////////For another user
const AnotherUser={
    email:"alex@gmail.com",
    name:"Ankit",
    class:"12th",
    story:"objects",
    OtherUser:{
username:"Ankush",login:"ankush123@gmail"
    },
    personName:"personAnkit",
    Students:{
        class7:"Ankit",
        class8:"jiger"
    }
}
// how to print it 
console.log(AnotherUser.Students.class8);
//Students? ye lagane se agar hai to API se fetch ho jayega nahi hai to nahi hoga

//For combining the Objects
 const obj1={1:"a",2:"b"};
 const obj2 ={3:"c",4:"d"};
 const obj5 ={3:"c",4:"d"};


 //how to combine this
 const obj3={obj1,obj2};
 console.log(obj3)
//ANOTHER WAY TO PRINT THIS CODE
const obj4=Object.assign({},obj1,obj2)
console.log(obj3);

//mostly we use spread operator
const objectCollection={...obj1,...obj2,...obj5};
console.log(objectCollection);

//ek syntax aur aap jayada use karenge jab database  value aaegi tab

const userer=[
    {email:"alexarya@gmail.com",
    name:"Ankit"
    },
    {
        name:"Ankush",
        class:"7th"
    }

]
//how to print
userer[1].email;
console.log(unique);
//for finding keys
console.log(Object.keys(AnotherUser));// ise hamne array ke under rakh diya
//is me jo output milata hai uska data type kya hai
//it is very important jab database me kaam karenge to usme jayada kaam aata hai eska
//its datatype is Array
console.log(Object.values(AnotherUser));
console.log(Object.entries(AnotherUser));

//jab value exist nahi karti ham object se puch bhi sakate hai
console.log(AnotherUser.hasOwnProperty('loginData'));//for finding property that are exist or not 