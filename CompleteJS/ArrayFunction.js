console.log("ArrayFunctions");

const MarvelHeroes=[
    'spiderman','Ironman','superman'
]
const DcHeroes=[
    'superman','flash','batman'
]
MarvelHeroes.push(DcHeroes);
// console.log(MarvelHeroes);

// console.log(MarvelHeroes[3][2]);

// Another method
MarvelHeroes.concat(DcHeroes);
// console.log(MarvelHeroes);

const Birds=[
    'cock','hen','peacock','peahen','duck'
]
const PetAnimals=[
    'cat','dog','cow','ox','buffalow'
]
const Animals=Birds.concat(PetAnimals);//concat returns new arrays it will add it
console.log(Animals);


//WE USING SPREAD OPERATORS
//GLASS GLASS THROW IT WILL SPREAD (TUT KE FAIL JAYEGA)

//easy way to right
const NewAnimals =[...Birds,...PetAnimals];
console.log(NewAnimals);
// =======================================================================
//This is array function it is easy to write
 const Array1=[1,2,3,4,5];
 const Array2=[5,6,7,9,10];
 const Array3=[7,4,5,6,7,9];
 const Array4=[1,3,5,8,6];

 const concatAll=Array1.concat(Array2,Array3,Array3,Array4);
 console.log(concatAll);
// =======================================================================
const ComplexArray=[
    1,2,3,[4,5,6],7,[8,4,5,6,7,],8,5,4,[4,7,8]
]
const RealComplexArr= ComplexArray.flat(Infinity);
//SPREAD OUT ALL ARRAYS
console.log(RealComplexArr);
//Use more when you are doing dataScraping karte hai browser
//se to kai baar nodelist ke form me aata hai 
//DATA OTHER FORMAT ME AATA HAI

console.log(Array.isArray("Ankit"));
// for making it array
console.log(Array.from("Ankit"));// it spread a,n,k,i,t

//we can pass many values in it

console.log(Array.from({name:"Ankit"}))





