const Coding=[
    'javascript','java','ruby','php','c++','c','c#','swift'
    ,'python'
]
// array.forEach(element => {
    
// });
Coding.forEach(function(item){
    //ye call back hai to iska name nahi hota ;
    //is me function ka name likhane ki koi jarurat nahi:
    //just give one parameter:
    console.log(item);
})

//iska ek aur variation

Coding.forEach((item)=>{
console.log(item);
})

//for Each use in function
function printValue(){
    //kya iske under value pass on kar sakate hai
}
Coding.forEach(printValue)//bas ham yaha refrence de rahe hai print nahi karwa rahe o khud print kar dega;

const subject=[
    'english','computer','chemistry','physics','math','hindi','biology'
]

subject.forEach((item,index,arr)=>{
    console.log(item,index,arr);
});

// [{},{},{}]//Array ke under objects
// // ["","",""]
// ------------------------------------------------

// [{},{},{}]//Array ke under objects
// ["","",""]

// -------------------------

const myACoding=[
    {
        languageName:"Javascript",
        languagefilename:'index.jsx'
    },
    {
        languageName:"reactjs",
        languagefileName:'index.jsx'
    },
    {
        languageName:"python",
        languageFileName:'index.py'
    }
]
//Database se data array ke form me aata hai jisme object rahta hai;

myACoding.forEach((item,index)=>{
console.log(item.languageName,index.languageFileName);
})

