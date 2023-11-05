console.log("While loop");
//for is good 
//while and do-while loops
let index=0;
while(index<=30){
    console.log(`This is true ${index}`);
// index=index+2
index=index+3;//you can make table by using this;
}

//For using in array
let myArray=['flash','superman','batman','spiderman','hulk'];

let arr=0;
while(arr<myArray.length){
    console.log(`This is value of array; ${myArray[arr]}`);
    arr=arr+1;
    // arr++;
}
// ========================

// DoWhileLOop
// Kaam pahale hota hai condition baad me check hoti hai 
let score=31;
do{
    console.log(`score is ${score}`);
    score=score+1;
    // score++;
}while(score<=20);