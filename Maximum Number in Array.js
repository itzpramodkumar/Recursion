// function Maximum(arr,index){
//     // Base case
//     if(index=== arr.length-1){
//         return arr[index];
//     }
// // Recursive Call
// let max=Maximum(arr,index+1);
// // current Work
// if(arr[index]>max){
//     return arr[index];
// }else{
//     return max
// }
// }
// let arr =[5,8,1,10,3];
// console.log(Maximum(arr,0));

// function maximum(arr,index){
//     // Base case 
//     if(index==arr.length-1){
//         return arr[index];
//     }
//     // Recursive Call
//     let max=maximum(arr,index+1);
//     // Current work
//     if(arr[index]>max){
//         return arr[index]
//     }
//     else{
//         return  max;
//     }

// }
// let arr=[1,2,3,4,5,9];
// console.log(maximum(arr,0))
function maximum(arr,index){
    if(index==arr.length-1){
        return arr[index];
    }
    // Recursive Call

    let max=maximum(arr,index+1);  // yea line kahti hai ki pahley mujey agey baley sey pta karo max kon hai
    if(arr[index]>max){
        return arr[index];
    }
    else{
        return max;
    }

}
let arr=[1,2,3,4,5,6,7,8,9];
console.log(maximum(arr,0));
 