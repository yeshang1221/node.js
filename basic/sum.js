console.log("hello");


let name="yeshang";
console.log(name);


function sum(s){
    let total = 0;
    for(let i = 0 ;i <= s; i++ ){
        total ++;
    }
    return total;
}
console.log(sum(1)); 
console.log(sum(10));
// 老師的寫法(在這邊這樣)
function sum(n){
    // 0(1);
    // return ((1+n)*n)/2;
    let sum = 0;
    for(let i=1;i<=n;i++){
    sum+=i;
    }
    return sum;
}
console.log(sum(10))
//--------------------