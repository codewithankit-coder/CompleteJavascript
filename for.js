const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:'swift',
    py:'python',
    php:'php'
}
// Forin loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for (const key in myObject){//is ne to bas keyvalue
//     console.log(key)
// }

// ==================================for  printing  Objects

for(const key in myObject){
    // console.log(myObject[key]);
    console.log(`${key}: shortcut is for ${myObject[key]}`);
}

//For in loop for Arrays
const heros=[
    'spiderman','hulk','batman','superman','flash','ironman','aquaman'
]

//only keys dega number ki form me 
// -------------------------------------------------------------
// for(const key in heros){
//     console.log(key);
// }
//for taking only its keyValues
// -----------------------------------------------------------------
for(const key in heros){
        console.log(heros[key]);
    }
for(const key in heros){
    console.log(`${key} values:${heros[key]}`);
}


//for in loop map me kaam karta  hai ya nahi

const map=new Map();
map.set('IN',"Indian");
map.set('USA',"United State of America");
console.log(map);
//map is not librateble 

for(const key in map){
    console.log(key);
}