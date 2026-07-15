function Minimum(arr,index){
    // Base case 
    if(index===arr.length-1){
        return arr[index];
    }

    // Recursive Call
    let min=Minimum(arr,index+1);

    // Current Work

 if(arr[index]<min){
    return arr[index];

 }
 else{
    return min;
    
 }

}
let arr=[1,2,3,4,5,6,7];
console.log(Minimum(arr,0));