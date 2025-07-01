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

let value ="javascript"
let repeatedcharacter =" "
let scount=0,maxcount=0
for(let i=0;i<=value.length;i++){
    for(let j=i+1;j<=value.length;j++){
        if(value[i]==value[j])
        {
            scount++
        }
    }
    if(scount>maxcount)
    {
    maxcount=scount
    repeatedcharacter=value[i]
}
}
console.log(repeatedcharacter)





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
