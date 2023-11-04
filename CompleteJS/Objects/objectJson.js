console.log("json Objects");

//destructuring  of Object
const course={
    course:'js in english',
    price:'999',
    courseInstructor:'Ankit'
}
// how to print this 
// console.log(course.courseInstructor);
//𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒𝕟𝕠𝕥𝕙𝕖𝕣 𝕨𝕒𝕪 𝕥𝕠 𝕡𝕣𝕚𝕟𝕥 𝕥𝕙𝕚𝕤 𝕔𝕠𝕕𝕖;
const {courseInstructor}=course;
console.log(courseInstructor);
//if your value is big so we can declear a variable 
//destructure of object
const {price:p}=course;//Here iam changed the key of it price to(p); 
console.log(p);
// +++++++++++++++OBJECT_METHODS_++++++++++++++
// const navbar=(props.companyName) we can't want to write it many times// propas is by default in reactjs

// const navbar=({companyName})=>{

// }
// navbar(companyName="AnkitCom");


// ++++++++++++++++++++++++++API+++++++++++++++++++++++
API 





