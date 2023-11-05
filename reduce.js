const myArray=[1,2,3,4,5,];

// const arr=myArray.reduce((acc,curval)=>{
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc+curval;
// },4);
// console.log(arr);

// ⁡⁢⁣⁣//Another way to write ;
const TotalValues=myArray.reduce((acc,curval)=>acc+curval,0);
console.log(TotalValues);


const ShoppingCart =[
            {itemName:"jscourse",
        price:1999},{
            itemName:'mobile Development course',
            price:5999
        },
        {
            itemName:"DataScience",
            price:13999
        }
]
const TotalShoppingCart=ShoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(TotalShoppingCart);