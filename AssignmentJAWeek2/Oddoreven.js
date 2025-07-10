//Write a function in JavaScript to check if a number is even or odd using function expression and arrow function.
//Function expression
let odd = function(n)
{
    if(n%2==0){
        console.log(`${n} is even number`)
    }else{
         console.log(`${n} is odd number`)
    }
}
odd(11)

//arrow function
let arrowtest = a =>{
     if(a%2==0){
        console.log(`${a} is even number`)
    }else{
         console.log(`${a} is odd number`)
    }
}
arrowtest(101)
