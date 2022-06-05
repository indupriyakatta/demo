// function display(num){
//     for(i=1;i<=num;i++){
//         console.log(i);
//     }
// }

// display(3);


// for(i=1;i<;i++){
//     console.log(i);
// }

// loop for print 2table

// function print(n, limit) {
//     for(i=1;i<=limit;i++){
//         // console.log(n*i)
//         console.log(`${n} X ${i} =${n*i}`);
//     }
   
// }
// print(2,10);
// print(5,25);

// function check(num){
//     if(num<=5){
//         console.log(short);
//     }
//     else{
//         console.log("tall");
//     }
// }
// check(6);

// function even(num){
//     for(i=1;i<=num;i++){
//         console.log(i*2);
//     }
// }
// even(18);
// function check(num){
//     if(num%2==0){
// console.log("this is even number");
//     }else{
//         console.log("this is an odd number");
//     }
// }
// check(10);
// check(15);

//  function sum(list){
//     console.log(list);

//     var sum=0;
//     for(var i=0; i<list.length; i++){
//         sum = sum+list[i];
//     }
//     console.log(sum);
//  }

//  function sum(list){
//     var sum = 0;
//     list.forEach(n=> sum=sum+n);
//     console.log(sum);

// }

//through reduce method
//  function sum(list){
//     var result = list.reduce((a,c)=>{
//         console.log(a,c);
//         return a+c;
//     },0)
//     console.log(result);
// }

// sum([10,20,30,40,50]);


function sum(list){
// console.log(list);
var sum=0;
for(var i =0;i<list.length;i++){
    sum=sum+list[i];
}
// console.log(sum);
    
}
sum([10,20,30,40,50]);

function sum2(list){
    console.log(list);
    var sum2=0;
    list.forEach(n=> sum2=sum2+n); 
    console.log(sum2);  
}

sum2([10,20,30,40,50]);


function sum(list){
    var result=list.reduce((a,c)=>{
        return a+c;
    },0)
    console.log(result);
}
sum([10,20,30,40,50]);