console.log("High order loops");

//THIS LOOPS ARE BASICALLY USED FOR ARRAYS AND OBJECTS

//For of 
// [{},{},{}]//Array ke under objects
// ["","",""]


const Myarray=['car','cycle','bike','flute'];

for (const arrNum of Myarray) {
    console.log(arrNum);
}

const Greetings="hello World ";
for (const greet of Greetings) {
    console.log(`Each char is ${greet}`)
}


//Datatype
//MAPS
// how to set values in Map

const map =new Map()
map.set('USA',"United States of America");
map.set('IN',"Indian");
map.set('FR',"France");
console.log(map);
//Maps are return unique in same order (means it is always in orders);

//Is pe ham loop laga sakate hai but how
console.log("This is maping keyValues");
for (const keyValue of map) {
    console.log(keyValue);
}//It gives you full arrays means all arrays

//if we want to print as single single values
for(const [key,values] of map){//[key,value ] this is array destructuring
    console.log(`${key} values are : ${values}`)
}


//For loop are using in Objects
const myObj={
    name:"Ankit",
    class:9
}
//ise tarike se ye loop kaam nahi karega Objects me
for(const [obj] of myObj){
    console.log(obj);
}