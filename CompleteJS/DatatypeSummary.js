 //Primitive Datatypes
//  7 types :String,Number,Boolean,null,underfined,symbol,BigInt

 //Refrence Types (None primitive Datatype); 
//  ye sari value oo hai jo direct  memory me allocate kiya ja sakta hai
// objects master kar ligiye




 console.log("This is function");
 console.log("This is a function basics");

 //typeScript
//  const score:number=100;
//integer Datatypes
const score =100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmial;//undefined

//how to define symbols
//it gives you uniqueness
const Id=Symbol("123")
const anotherId=Symbol('123')

console.log(Id===anotherId);

// example 
const bigNumber=1351453411n;


 //Array,Objects,Functions

 //javascript are Dynamically type language    
// {kis tarah se memory me data rakha jata hai us bases pe data ka 2 categorised}

//Array basics non promitive
//refrence types;
const hero=["shaktiman","Ankit",'ankush',"suhani","papa"]
//Objects
let collection={
name:"Ankit",
class:"12th",
rollno:9,
email:"alexarya596@gmail.com"
}

//function 
const fn=function(){
    console.log("This is function");
    fn();
}


//how to know any datatypes using typeOf

console.log(typeof fn);
console.log(typeof outsideTemp);
console.log(typeof scoreValue)