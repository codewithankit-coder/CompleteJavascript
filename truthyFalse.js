// const userEmail=""; is string ko maan lete hai  +FALSE+
const userEmail="Ankit@gmail.com";//agar string ke under kuchh hai to use maan lete hai true;

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}

// FALSY VALUES
// false,0 ,-0,BigInt 0n,"",null,undefined,Nan;

//TRUTHY VALUES //because it is in String
//Array[],"0",'false'," space",[],{},function(){}//this is empty function
// ==========================================================================================
const user=[];
// For Checking  Array []
if(user.length===0){
    console.log("This  array is empty");
}

// ==============================================================
//For checking Objects{}
const Name={};
if(Object.keys(Name).length===0){
    console.log("This Object is empty");
}

//==>NULLISH COALESCRING OPERATOR(??):NULL UNDEFINED

let val1;
val1=null??10;
// val1=5??10;
console.log(val1);
let val2;
val2=undefined??34;
console.log(val2);


/////////////////////////////////////////////////////////////////
let val3;
val3=null ?? 10??20;

// =========================================
// Ternary OPerator
// condition ? true:false;
const priceIceCream=100;
priceIceCream<=80?console.log("less than 80"):console.log("more than 80");




