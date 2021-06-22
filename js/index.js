const { odd,even} = require('./hellow');
const checkNumber = require('./include');

function checkStringOddOrEven(str)
{
    if(str.length % 2 )
    {
        return odd;
    } else
        return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
