const Creater=[
    Birds=['pigeon','pengeon','emu','peacock','cock','peahen','ostrich','Duck','Crow','sparrow','parrot','myna','woodpeeker','kiwi','kite','Eagle','hen','chicken','owl','kingfisher','raven','pelican','stork','cucukoo','quail','swan',
    Animals=['tiger','lion','cat','cow','bull','ox'
, PetAnimals=['cat','rat','camel','ox','goat','buffalow']]
]
]
// console.log(Creater[10][4][4])
console.log(Birds[4]);
console.log(Animals[3]);
console.log(PetAnimals[4])

//Methods
const CreateOne=Creater.join();//it gives you as a simple form // it also change in string
console.log(CreateOne);
console.log(typeof CreateOne);


const CreateOneA=[0,1,2,3,4,5,6,7];
//Slice and splice 
console.log(CreateOneA.slice(1,5)); // only 1 to 4

console.log(CreateOneA.splice(1,5));//ye 1 to 5 hat jata hai or Original Array change ho jata hai 
console.log(CreateOneA);
