// 1.check if a string is a palindrome?
// input: madam ; output: madam 

let input= "madam"
let reversedvalue =input.split('').reverse().join('')
if(reversedvalue==input)
{
    console.log("String is a palindrome")
}else{
    console.log("String is not a palindrome")
}

// 2.find the most frequent character in a string?
// input : javascript

let input1 ="javascript"





// 3.count the number of vowels in a string
// input: function

let word = "function"
let vowelword ="AEIOUaeiou"
let newword =word.split('')
let vowelsplit = vowelword.split('')
let count=0,i=0,j=0

for (i=0;i<newword.length;i++)
{
    for(j=0;j<vowelsplit.length;j++)
        {
            if(newword[i]==vowelsplit[j])
            {
                count++
            }
        }
   
    
}
console.log(count)
