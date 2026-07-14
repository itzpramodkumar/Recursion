// function reverse(str){
//     // Base case
//     if(str.length==0){
//         return "";
//     }
// return reverse(str.slice(1))+str[0]
// }
// let str="Hello"
// console.log(reverse(str))


function reverse(str){
    if(str.length==0){
        return "";
    }
    return reverse(str.slice(1))+str[0]
}

let str="Hello"
console.log(reverse(str))