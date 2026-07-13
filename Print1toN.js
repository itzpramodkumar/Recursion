function print(n){
    if(n==0){
        return;
    
    }
    print(n-1);
    console.log(n);

}
let n=12
print(n);