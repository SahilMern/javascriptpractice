//! reverse the string 
const reverseString = "Hello Bro How are you";
const reverseString1= reverseString.split(" ") 
console.log(reverseString1);
const data= reverseString1.map((element) => {
    return element.split("").reverse().join("");
})
console.log(data.join(" "), "Data");
