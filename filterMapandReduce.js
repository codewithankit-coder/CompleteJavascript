// console.log("foreEach loop");
// const coding=[
//     'js','php','swift','python','ruby','java','c++'
// ]
// coding.forEach((item)=>{
// console.log(item);
// })

// // ⁡⁢⁣⁣ if we take in variables;


// // ⁣⁢⁢ForEach loop values ko return nahi karta;


// const values=coding.forEach((item)=>{
//     // ⁡⁣⁣⁢console.log(item);⁡
// return item})
//  console.log(values);

// // ⁡⁢⁢⁢ For returning the values of forEach loop;

//  const myNums=[
//     1,2,3,4,5,6,7,8,9,10
//  ]
// //  ⁡⁢⁣⁣ye values return karta hai+++++⁡

//  const Num=myNums.filter((num)=>num>4);
//  const Nums=myNums.filter((num)=>num<=4);
// // console.log(Nums);
// //  console.log(Num);

//  const myNo=myNums.filter((num)=>{
// return num>4//⁡⁢⁢⁣Agar scope lagate hai to return bhi likhana padega⁡
//  });
// //  console.log(myNo);//ye [] print ⁡⁢⁣⁣karega ⁡


// // ⁡⁢⁣⁢ without using filter ,we using forEach loop⁡⁡

// const Numb=[
//     1,2,3,4,5,6,7,8,9,10
//  ]
// const newArray=[];
// Numb.forEach((num)=>{
//     if(num>4){
//         newArray.push(num);
//     }
// })
// console.log(newArray);



// //⁡⁢⁣⁢Database ⁡ ⁡⁢⁣se yese hi values hame milegi ⁡

const books=[
    {title:'Book one',grnre:'Fiction',publish:1999,edition:2004},
    {title:'Book Two',grnre:'Fiction2',publish:1999,edition:2004},
    {title:'Book Three',grnre:'Fiction3',publish:1994,edition:2004},
    {title:'Book Four',grnre:'Fiction4',publish:1599,edition:2004},
    {title:'Book Five',grnre:'Fiction5',publish:1799,edition:2004},
    {title:'Book Six',grnre:'Fiction6',publish:1909,edition:2004},
    {title:'Book seven',grnre:'Fiction7',publish:1339,edition:2004},
    {title:'Book eight',grnre:'Fiction8',publish:1339,edition:2004},
    {title:'Book nine',grnre:'Fiction9',publish:2000,edition:2004},
    {title:'Book Ten',grnre:'Fiction10',publish:1949,edition:2004},
    {title:'Book eleven',grnre:'Fiction11',publish:1400,edition:2004},
    {title:'Book Twelve',grnre:'Fiction',publish:1944,edition:2004},
    {title:'Book Thirteen',grnre:'Fiction',publish:1988,edition:2004},
    {title:'Book Fourteen',grnre:'Fiction',publish:1956,edition:2004},

    {title:'Book Fifteen',grnre:'History',publish:1945,edition:2004}
]
// ⁡⁢⁣⁢ console.log("This is Array file");

// ⁡⁢⁣⁢user apane web pe filter lagana chahta hai to hame  ushe use karne ka allow karenge⁡

let  userBooks=books.filter((allbooks)=> allbooks.grnre==='Fiction');

const userBooks2=books.filter((edition)=>edition.publish>1900);
console.log(userBooks2);
console.log(userBooks);

userBooks=books.filter((bk)=>{ return bk.publish<1999&& bk.grnre==="History"});
console.log(userBooks);


