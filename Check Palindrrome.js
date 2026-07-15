// function palindrome (str,start,end){
//     // Base case
//     if(start>=end){
//         return true;
//     }
//     if(str[start]!=str[end]){
//         return false
//     }
//     return palindrome (str,start+1,end-1);
// }
// let str="madam";
// console.log(palindrome(str,0,str.length-1))
// 
// 
// 
// ;


function palindrome(str ,start,end){
    if(start>=end){
        return  true;
    }
    if(str[start]!=str[end]){
        return false;
    }
    return palindrome(str, start+1,end-1);
}
let str="jhgfdh";
console.log(palindrome(str,0,str.length-1))