// function reverseArr(arr,start,end){
//     // Base case 
//     if(start>=end){
//         return;
//     }
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;
//     // Recursive call
//     reverseArr(arr,start+1,end-1);
// }
// let arr=[1,2,3,4,5];
// reverseArr(arr,0,arr.length-1);

// console.log(arr);

// function reverseArr(arr,start,end){
//     // Base case 
//     if(start>=end){
//         return;
//     }
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp;
//     // recursive call
//     reverseArr(arr,start+1,end-1);

// }
// let arr=[1,2,3,4,5];
// reverseArr(arr,0,arr.length-1);
// console.log(arr);


function reverseArr(arr,start,end){
    if(start>=end){
        return;
    }
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp;
    // recursive call
    reverseArr(arr,start+1,end-1);
}
let arr=[1,2,3,4,5,6];
reverseArr(arr,0,arr.length-1)
console.log(arr);

