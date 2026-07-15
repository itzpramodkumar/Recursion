// function isSorted(arr,index){
//     // Base Case
//     if(index===arr.length-1){
//         return true;
//     } 
//     if(arr[index]>arr[index+1]){
//         return false;
//     }
//     // recursive call
//     return isSorted(arr,index+1);

// }
// let arr=[5,8,1,0,9];
// console.log(isSorted(arr,0))

function sorted(arr,index){
    if(index===arr.length-1){
        return true;
    }

if( arr[index]>arr[index+1]){
    return false;
}
return sorted(arr,index+1)
}
let arr=[1,2,3,4,5,6];
console.log(sorted(arr,0))