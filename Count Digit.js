// function Count(n){
//     if(n==0){
//         return 0;
//     }

//     return 1+Count(Math.floor(n/10));
// }
// let n=123456;
// console.log(Count(n)); 



function count(n){
    if(n==0){
        return 0;
    }
    return 1 + count (Math.floor(n/10));
}
let n=123456;
console.log(count(n));
