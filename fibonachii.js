// function fibo(n,first,second){
//     if(n==0)
//         return;
//     let third=first+second;
//     console.log(third+" ");
//     fibo(n-1,second,third);
// }
// let n=10;
// console.log(0 + " " + 1 + " ");
// fibo (n-2,0,1);


// function fibo( n, first,second){
//     if(n==0)
//         return;
//     let third=first+second;
//     console.log(third+" ");
//     fibo(n-1,second,third);

// }
// let n=10;
// console.log(0 + " " + 1 + " ");
// fibo(n-2,0,1)


// function fibo (n,first,second){
//     if(n==0)
//         return;
//     let third=first+second;
//     console.log(third + " ");
//     fibo(n-1,second,third);

// }
// let n=10;
// console.log( 0+ " " + 1 + " ");
// fibo(n-2,0,1);


function fabi(n,first,second){
if(n==0){
    return
}
let third=first+second;
console.log(third + " ")
fabi(n-1,second,third);
}
let n=10
console.log(0+ " " + 1 + "" );
fabi(n-2, 0 ,1);
