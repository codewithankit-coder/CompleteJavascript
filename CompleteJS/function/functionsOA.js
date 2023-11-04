console.log("functions  with Objects + Array");

//Shopping Cart 
//rest Operator
function CalculatecardPrice(...num1){
return num1
}
console.log(CalculatecardPrice(122,122,344,55,555,666));
function CalculatecardPrice(...num1){
    return num1
    }
    console.log(CalculatecardPrice(122,122,344,55,555,666));
    //
    function CartPrice(val1,val2,...num1){
        return num1
        }//122 val1 ,128 is val2
        console.log(CartPrice(122,128,344,55,555,666));
        //Aur jo bacha o print ho jayega 344 to 666;

        const userCart={
            username:"Ankit",
            price:499
        }
        // how to use in function
        function user(AnyObject){
console.log(`userName is: ${AnyObject.username} and price is ${AnyObject.price}`)
        }
        // user(userCart)
        //𝕎𝔼 ℂ𝔸ℕ 𝕎ℝ𝕀𝕋𝔼 𝔸𝕃𝕊𝕆 𝕋ℍ𝕀𝕊 𝕋𝕐ℙ𝔼

        user({
            username:"Chips",
            price:399
        })

        //for passing Objects

        const myNew =[200,400,399,555];
//yeha array define karte hai jo function ki 2ndvalue ko return kar deta hai

function ReturnSecondValue(getArray){
return getArray[1]//yaha hamne index value diya tha
}
// console.log(ReturnSecondValue(myNew));
//𝕨𝕖 𝕔𝕒𝕟 𝕕𝕚𝕣𝕖𝕔𝕥 𝕡𝕒𝕤𝕤 𝕥𝕙𝕖 𝕧𝕒𝕝𝕦𝕖𝕤
console.log(ReturnSecondValue([300,400,500,600,400,200]))
            
